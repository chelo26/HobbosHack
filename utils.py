from wit import Wit

access_token = "5OLTSHJDHPCIECURPUU5SGZWWC2SUXX4"
client = Wit(access_token = access_token)

def wit_response(message_text):
	resp = client.message(message_text)

	entity = None
	value = None

	try:
		entity = list(resp['entities'])[0]
		value = resp['entities'][entity][0]['value']
	except:
		pass

	return (entity, value)

#print(wit_response("Where are you from?"))
#
# buttons = [
# 	{
# 		"type": "web_url",
# 		"url": "http://www.paginasiete.bo/",
# 		"title": "Bolivian News"
# 	},
# 	{
# 		"type": "web_url",
# 		"url": "http://www.paginasiete.bo/",
# 		"title": "Bolivian News"
# 	},
#
# 	{
# 		"type": "postback",
# 		"title": "Something else",
# 		"payload": "balbal"
# 	}]