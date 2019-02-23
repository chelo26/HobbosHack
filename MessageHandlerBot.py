# Class that implements the answers to the conversation:
# -*- coding: utf-8 -*-
from utils import wit_response
from datetime import datetime
import pandas as pd


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
                # print("message" , message)
                if len(message) == 3:
                    text = message["text"]
                    self.text = text
                    # self.type = "text"
                    return text, True
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
                "timestamp": datetime.utcnow()}
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
            message_seq = db.find({"sender_id":sender_id},{"message": 1, "_id":0,"timestamp":1})#.sort({"timestamp":-1})
        except:
            return 'new_user'


        message_df = pd.DataFrame(message_seq)
        message_seq = message_df.sort_values(by='timestamp', ascending=True).message.values
        return message_seq
