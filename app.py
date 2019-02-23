# -*- coding: utf-8 -*-
import os, sys
import pprint
from flask import Flask, request
from MessageHandlerBot import MessageHandlerBot
from pymongo import MongoClient
import creds as CR
from pymessenger import Bot
from pymessenger import Button
import re
from datetime import datetime

# TIPICAL GREETINGS:
GREETINGS = set(["salut!","salut","hello","hi","holaa","hola","hey","holas","heyy","hii","hiii"])

questions = {'0':'Are you looking for a place to stay tonight?',
             '1':'Where are you ?',
             '2':'We\'re looking for the service that\'s best for you.\nHow old are you?'}

answers = {'0':['yes','no']}

# Building the tree:
def build_tree():
    questions = {'0': 'Hi, welcome to DePaul. \nAre you looking for a place to stay tonight?',
                 '1': 'Where are you? (Share GPS location or type)',
                 '2': 'How old are you?',
                 '3': 'Are you a woman, man, other?',
                 '4': 'To make sure you feel comfortable in your environment, are you ...',
                 '5': 'To make sure our staff know how to help you, click on all of those that apply',
                 '6': 'Do you have criminal record?'
                 }

    sub_seq = {'0': [('yes', '1'), ('no', None)],
               '1': [('single_choice', 2)] ,
               '2': [('under_16', None), ('16_to_25', 3), ('25_and_over', None)],
               '3': [('male', 4), ('female', 4), ('other', 4)],
               '4': [('straight', 5), ('homosexual', 5), ('other', 5)],
               '5': [('pregnant', 6), ('anxiety', 6), ('depression', 6)],
               '6': [('yes', 7), ('no', 7)]
               }

    return { key : {'text': questions[key], 'children': {value[0]: value[1] for value in values}} for key, values in sub_seq.items()}

DECISION_TREE = build_tree()

def determine_stage(seq_string_list):
    # Expect list of [(q1, a1), (q2, a2) ...]
    res = None

    try:
        for ss in seq_string_list:
            res = DECISION_TREE[ss[0]]['children'][ss[1]]['id']

    except:
        print("Something may have gone wrong, most probably different answer?")
        # If there were sequences, roll back to last question

        if seq_string_list:
            res = seq_string_list[-1][0]

        res = '0'
        # Anything else might be suspicious activity, go back to initial state

    return res


TREE = {0:'Q1',1:''}






# Initialize database:
def point_collection():
    client = MongoClient(CR.mongo_host,CR.mongo_port)
    db = client[CR.mongo_db]
    collection = db.messages
    return collection

def clean_message(message):
    message = message.lower()
    message = re.sub(r'[^\w]', '', message)
    return message

def generate_post(sender_id,message):
    post = {"sender_id": sender_id,
            #"recipient_id": self.last_recipient_id,
            "message": message,
            "timestamp": datetime.utcnow()}
    return post

def encode_received_message(message):
    return


# Get a reply:
def get_reply(last_client_message,last):
    last_message = clean_message(last_client_message)
    return


# Ask next question:
def ask_question(responder_bot,sender_id,question_number = 0):

    if question_number == 0:
        greeting = "Hi welcome to De Paul!"
        help_type = "How could we help you?"
        code = 0
        buttons = [
                {"title":"I need a place to stay tonight"},
                {"title":"Information about Depaul"},
                  {
                    "type": "postback",
                    "title": "Something else",
                    "payload": "Please call this number if you want to talk to somebody"
                   }]

        # Replying:
        responder_bot.send_text_message(sender_id,greeting)
        responder_bot.send_button_message(sender_id,help_type,buttons)

    return code


# Messages database:
messages_table = point_collection()

# Bots:
responder_bot = Bot(CR.PAGE_ACCESS_TOKEN)


# App:
app = Flask(__name__)

@app.route('/', methods=['GET'])
def verify():
	# Webhook verification
    if request.args.get("hub.mode") == "subscribe" and request.args.get("hub.challenge"):
        if not request.args.get("hub.verify_token") == "hello":
            return "Verification token mismatch", 403
        return request.args["hub.challenge"], 200
    #print(request.args)
    return "Hello world", 200

@app.route('/', methods=['POST'])
def webhook():
    # Get the message in Json format:

    message_event = request.get_json()
    print("message event received: ")
    pprint.pprint(message_event)
    print("")
    print("")
    # Parse message:

    # 1. Bot parses the message
    listener_bot = MessageHandlerBot()

    # If it receives a text message or a payload message:
    last_client_message, send_back_bool = listener_bot.parse_json_message(message_event)
    last_client_message = clean_message(last_client_message)
    print("last client message: ", last_client_message)


    # If we should message back:
    if send_back_bool == True:

        # 2. Bot stores the message
        post = listener_bot.generate_post()
        listener_bot.store_message(messages_table,post)

        # 3.Finding the sender_id:
        sender_id = listener_bot.sender_id

        # 3.2 Finding last messages:
        sender_id = str(sender_id).strip()
        message_seq = listener_bot.get_messages_sequence(messages_table,sender_id)

        # 4. Sending the answer:
        try:
            num_past_messages = len(message_seq)
            code_question = ask_question(responder_bot, sender_id, num_past_messages)
        except:
            code_question = ask_question(responder_bot, sender_id)

        post = generate_post(sender_id,server_next_question)

        listener_bot.store_message(messages_table,post)

        responder_bot.send_text_message(sender_id, server_next_question)
        # if len(answer_tuple) == 2:
        #     answer = answer_tuple[0]
        #     print("")
        #     print("answer to send: ", server_next_question)
        #     print("")
        #     responder_bot.send_text_message(sender_id, server_next_question)
        #     #responder_bot.send_text_message(sender_id, "test")
        # else:
        #     offers = answer_tuple[0]
        #     buttons = answer_tuple[1]
        #     responder_bot.send_button_message(sender_id,offers,buttons)
    else:
        pass

    return "ok", 200


if __name__ == "__main__":
	app.run(host = "0.0.0.0",port=5000)
