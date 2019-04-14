# -*- coding: utf-8 -*-
import os, sys
import pprint
from flask import Flask, request, jsonify
from MessageHandlerBot import MessageHandlerBot
from pymongo import MongoClient
import creds as CR
from pymessenger import Bot
from pymessenger import Button,Element
import re
from datetime import datetime
from build_decision_tree import build_tree, determine_stage
from functools import partial

#  TIPICAL GREETINGS:





GREETINGS = set(["salut!", "salut", "hello", "hi", "holaa", "hola", "hey", "holas", "heyy", "hii", "hiii"])

questions = {'0': 'Are you looking for a place to stay tonight?',
             '1': 'Where are you ?',
             '2': 'We\'re looking for the service that\'s best for you.\nHow old are you?'}

answers = {'0': ['yes', 'no']}


HOMES_BUTTON = [
    {
        "type": "web_url",
        "url": "https://uk.depaulcharity.org/",
        "title": "NightStop 🏠"
    },
    {
        "type": "web_url",
        "url": "https://centrepoint.org.uk/ ",
        "title": "CentrePoint 🛏"
    },
    {
        "type": "web_url",
        "url": "https://www.ymca.org.uk/about/what-we-do/accommodation",
        "title": "YMCA"
    },
    {
        "type": "postback",
        "title": "Something else",
        "payload": "otro"
    }]




# Building the tree:
def build_tree():
    questions = {'0': 'Hi, welcome to DePaul.\nAre you looking for a place to stay tonight?',
                 '1': 'Where are you? (Share GPS location or type)',
                 '2': 'How old are you?',
                 '3': 'Are you a woman, man, other?',
                 '4': 'To make sure you feel comfortable in your environment, are you ...',
                 '5': 'To make sure our staff know how to help you,'
                      'can you select the case that you feel the closest to:'
                      '\n1) I\'m pregnant'
                      '\n2) I\'m experiencing depression'
                      '\n3) Substance abuse'
                      '\n4) I\'m running away from a dangerous relationship',
                 '6': 'Do you have criminal record?'
                 }

    sub_seq = {'0': [('yes', '1'), ('no', None)],
               '1': [('single_choice', 2)],
               '2': [('under_16', None), ('16_to_25', 3), ('25_and_over', None)],
               '3': [('male', 4), ('female', 4), ('other', 4)],
               '4': [('straight', 5), ('homosexual', 5), ('other', 5)],
               '5': [('pregnant', 6), ('anxiety', 6), ('depression', 6)],
               '6': [('yes', 7), ('no', 7)]
               }

    return {key: {'text': questions[key], 'children': {value[0]: value[1] for value in values}} for key, values in
            sub_seq.items()}


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


CODE_TREE = {1:'Q1',
             3:'Q2',
             5:'Q3',
             7:'Q4',
             9:'Q5',
             11:'Q6',
             13:'Q7',
             15:'Q8',
             17:'Q9'
             }

QUESTIONS = {1:'Hey, I\'m Ellie. '
               '\nI\'m a virtual friend and I\'m here to help you find a safe place to stay.'
               'I\'m not a real person and don’t store any of your information unless you agree.'
               '\nIn fact, my sole existence is to give you the information you need.'
               '\nAlso remember, if this an emergency please call 999.'
               ' Can I ask you a few questions?',
             3:'Are you looking for a safe place to stay tonight?',
             5:'Where are you based?',
             7:'We are looking for the service that\'s the best for you. How old are you?',
             9:'We want to help you feel comfortable in your environment. Are you a... '
                    '\n1) Woman,'
                    '\n2) Man,'
                    '\n3) LGBT,'
                    '\n4) Other?',
             11:'Which one applies to you?'
                    '\n1) I\'m pregnant'
                    '\n2) I\'m experiencing depression'
                    '\n3) Substance abuse'
                    '\n4) I\'m running away from a dangeours relationship',
             13:'Do you have a criminal record?',
             15:'Great, we can offer you the following:'

             }



# Build and load entire decision tree
decision_tree = build_tree()

# Partial function to include decision tree
determine_tree_stage = partial(determine_stage, decision_tree=decision_tree)


# Initialize database:
def point_collection():
    client = MongoClient(CR.mongo_host, CR.mongo_port)
    db = client[CR.mongo_db]
    collection = db.messages
    return collection


def clean_message(message):
    message = message.lower()
    message = re.sub(r'[^\w]', '', message)
    return message


def generate_post(sender_id, code):
    post = {"sender_id": sender_id,
            "code":code,
            "timestamp": datetime.utcnow()}
    return post


def encode_received_message(message):
    return


# Get a reply:
def get_reply(last_client_message, last):
    last_message = clean_message(last_client_message)
    return


# Ask next question:
def ask_question(responder_bot, sender_id, question_number=1):

    question = QUESTIONS.get(question_number)

    if question is None:
        return None
    elif question_number == 15:
        print('sending button')
        responder_bot.send_button_message(sender_id,question,HOMES_BUTTON)
        return question_number
    else:
        responder_bot.send_text_message(sender_id, question)
        return question_number


# Messages database:
messages_table = point_collection()
messages_table.remove()


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
    # print(request.args)
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


    # If we should message back:
    if send_back_bool == True:

        last_client_message = clean_message(last_client_message)
        print("last client message: ", last_client_message)

        # 2. Bot stores the message
        post = listener_bot.generate_post()
        print(post)
        listener_bot.store_message(messages_table, post)

        # 3.Finding the sender_id:
        sender_id = listener_bot.sender_id


        # 3.2 Finding last messages:
        message_seq = listener_bot.get_messages_sequence(messages_table, sender_id)

        print('message seq: ', message_seq)

        # 4. Sending the answer:
        if type(message_seq) != list:


            num_past_messages = len(message_seq)
            print('message seq: ', message_seq)
            print('number of past messages: ', num_past_messages)

            question_number = ask_question(responder_bot, sender_id, num_past_messages)
            print('code question: ', question_number)
            ## RETURNS NONE WHEN reached 15.

        else:
            question_number = ask_question(responder_bot, sender_id)
            print('exception: ',question_number)

        print('code question before looking the tree: ', question_number)
        node = CODE_TREE.get(question_number)
        print('node: ',node)

        post = generate_post(sender_id, node)
        listener_bot.store_message(messages_table, post)

    else:
        pass

    return "ok", 200


@app.route("/web", methods=['POST'])
def questionnaire_initial_state():
    return jsonify(decision_tree['0'])


@app.route("/web/questions/<question_stage>")
def questionnaire_stage(question_stage, methods=['POST']):
    req_answer = request.form['answer']
    seq_string = [(question_stage, req_answer)]

    return jsonify(determine_tree_stage(seq_string))


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)

