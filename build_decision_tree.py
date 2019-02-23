import pprint

pp = pprint.PrettyPrinter(indent=4)

questions = {'0': 'Are you looking for a place to stay tonight?',
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

question_seq = { key : {'text': questions[key], 'children': {value[0]: value[1] for value in values}} for key, values in sub_seq.items()}

pp.pprint(question_seq)
