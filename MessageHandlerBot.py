# Class that implements the answers to the conversation:
# -*- coding: utf-8 -*-
from utils import wit_response
from datetime import datetime
import pandas as pd

CODE_TREE = {0:'A0',1: 'Q1', 2: 'A1',3:'A2',4:'A3'}

GREETINGS = {"salut!", "salut", "hello", "hi", "holaa", "hola", "hey", "holas", "heyy", "hii", "hiii"}
NIGHTSTOP = {'yes':'A1','no':'A2'}
LOCATIONS = {'london':'A3','greenwich':'A3','camden':'A3'}
AGE='A4'
GENDER = {'woman':'A5','man':'A6','LGBT':'A7','Other':'A8'}
PROBLEM = {'1':'A9','2':'A10','3':'A11','4':'A12'}









# Creating a message object that can contain image or text :
class MessageHandlerBot():
    def __init__(self):
        self.sender_id = None  # message_event['sender']['id']
        self.recipient_id = None  # message_event['recipient']['id']
        self.image_url = None
        self.text = None
        self.timestamp = None  # message_event['timestamp']
        # self.parse_message(message_event)
        self.type = None

    def parse_json_message(self, message_event):
        entry = message_event["entry"][0]
        messaging = entry.get("messaging")
        # print("messaging ", messaging)
        if messaging:
            messaging = messaging[0]
            message = messaging.get("message")
            self.sender_id = messaging["sender"]["id"]
            self.recipient_id = messaging["recipient"]["id"]
            if message:
                print("first message" , message)
                if len(message) == 3:
                    text = message["text"]
                    text = text.lower()
                    self.text = text

                    if text in GREETINGS:
                        self.code = 'A0'
                        return text, True

                    elif text in NIGHTSTOP.keys():
                        self.code = NIGHTSTOP[text]
                        return text, True

                    elif text in LOCATIONS.keys():
                        self.code = LOCATIONS[text]
                        return text, True

                    elif text in GENDER.keys():
                        self.code = GENDER[text]
                        return text,True

                    elif text in PROBLEM:
                        self.code = PROBLEM[text]
                        return text, True

                    else:

                        try:
                            age = int(text)
                            self.code = AGE
                            return str(age), True
                        except:
                            return None, False

                        return None, False
                else:
                    return None, False
            elif messaging.get("postback"):
                message = messaging.get("postback")
                payload = message["payload"]
                self.text = payload
                return payload, True
            else:
                return None, False
        else:
            return None, False

    def generate_post(self):

        post = {"sender_id": self.sender_id,
                "recipient_id": self.recipient_id,
                "message": self.text,
                "code":self.code,
                "timestamp":datetime.utcnow()}
        return post

    def store_message(self, db, post):

        db.insert(post)

    def find_last_message_received(self, db, sender_id):
        message_entry = db.find({"sender_id": sender_id}).sort("timestamp", -1).limit(1)
        # print("last message received: ")
        # print(message_entry)
        parsed_message = next(message_entry)
        # print(parsed_message)
        return parsed_message["message"]

    def find_last_message_sent(self, db, sender_id):
        # message_entry = db.find({"recipient_id":{"$exists": False}},{"sender_id":sender_id}}).sort("timestamp",-1).limit(1)

        message_entry = db.find({"sender_id": {"$ne": sender_id}}).sort("timestamp", -1).limit(1)
        # print("last message sent: ")
        # print(message_entry)
        try:
            parsed_message = next(message_entry)
            # print(parsed_message)
        except StopIteration:
            parsed_message = {"message": None}
            # print(parsed_message)
            pass
        return parsed_message["message"]

    def get_messages_sequence(self, db, sender_id):

        #message_seq = db.find({"sender_id":sender_id},{"message": 1, "_id":0}).sort([{"timestamp":-1}])
        try:
            message_seq = db.find({"sender_id":sender_id},{"code": 1, "_id":0,"timestamp":1})
        except:
            return 'new_user'

        message_df = pd.DataFrame(message_seq)
        message_seq = message_df.sort_values(by='timestamp', ascending=True)['code'].values
        return message_seq
