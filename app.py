# -*- coding: utf-8 -*-
import os, sys
import pprint
from flask import Flask, request
from MessageHandlerBot import MessageHandlerBot
from pymongo import MongoClient
import creds as CR
from pymessenger import Bot
import re
from datetime import datetime

# TIPICAL GREETINGS:
GREETINGS = set(["salut!","salut","hello","hi","holaa","hola","hey","holas","heyy","hii","hiii"])

questions = {'0':'Are you looking for a place to stay tonight?',
             '1':'Where are you ?',
             '2':'We\'re looking for the service that\'s best for you.\nHow old are you?'}

answers = {'0':['yes','no']}







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





# Find an answer:

def answer_to_message(last_message_received,last_message_sent):
    # Cleaning message:
    if last_message_sent:
        last_message_sent = clean_message(last_message_sent)
    if last_message_received:
        last_message_received = clean_message(last_message_received)

    # Different messages:
    saludo = "Hi welcome to De Paul! \nHow could we help you ?"
    buttons = [
            {
            "type":"web_url",
            "url":"http://www.paginasiete.bo/",
            "title":"Bolivian News"
            },
            {
              "type":"web_url",
              "url":"http://www.paginasiete.bo/",
              "title":"Bolivian News"
              },

              {
                "type": "postback",
                "title": "otro",
                "payload": "balbal"
               }]

    if last_message_received in GREETINGS:
        return (saludo,"text")

    elif "yes" in last_message_received: #and last_message_sent == saludo:
        offers = "great, I can offer you:"
        return (offers,buttons,"options")

    elif last_message_received =="otro":
        return ("what ? ","text")

    else:
        return ("To complete","text")




# Messages database:
messages_table = point_collection()
print('database')
# Bots:
#listener_bot = MessageHandlerBot()
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

    #print("send back bool : ", send_back_bool)
    #print("")

    # If we should message back:
    if send_back_bool == True:

        # 2. Bot stores the message
        post = listener_bot.generate_post()
        listener_bot.store_message(messages_table,post)

        # 3.Finding the sender_id:
        sender_id = listener_bot.sender_id

        # 3.2 Finding last messages:
        #last_message_received = listener_bot.find_last_message_received(messages_table,sender_id)

        #qa_sequence = listener_bot.find_last_message_sent(messages_table,sender_id)
        qa_sequence = listener_bot.get_messages_sequence(messages_table, sender_id)

        last_server_question = list(qa_sequence)
        print("last question sent by server: ", last_server_question)

        # 4. Sending the answer:
        #answer_tuple = answer_to_message(last_message_received,last_message_sent)
        server_next_question = 'what?'

        #server_reply = get_reply(last_client_message,last_server_question)

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
