def build_tree():
    questions = {'0': 'Are you looking for a place to stay tonight?',
                 '1': 'Where are you? (Share GPS location or type)',
                 '2': 'How old are you?',
                 '3': 'Are you a woman, man, other?',
                 '4': 'To make sure you feel comfortable in your environment, are you ...',
                 '5': 'To make sure our staff know how to help you, click on all of those that apply',
                 '6': 'Do you have criminal record?'
                 }

    sub_seq = {'0': [('yes', '1'), ('no', None)],
               '1': [('single_choice', '2')] ,
               '2': [('under_16', None), ('16_to_25', '3'), ('25_and_over', None)],
               '3': [('male', '4'), ('female', '4'), ('other', '4')],
               '4': [('straight', '5'), ('homosexual', '5'), ('other', '5')],
               '5': [('pregnant', '6'), ('anxiety', '6'), ('depression', '6')],
               '6': [('yes', '7'), ('no', '7')]
               }

    return { key : {'text': questions[key], 'children': {value[0]: value[1] for value in values}} for key, values in sub_seq.items()}


def determine_tree_stage(seq_string_list, decision_tree):
    # Expect list of [(q1, a1), (q2, a2) ...]
    res_stage = None

    try:
        for ss in seq_string_list:
            # res_stage = decision_tree[ss[0]]['children'][ss[1]]
            res_stage = decision_tree[ss[0]]
        # res_stage = decision_tree[res_stage]
    except:
        print("Something may have gone wrong, most probably different answer?")
        # If there were sequences, roll back to last question
        if seq_string_list:
            res_stage = decision_tree[seq_string_list[-1][0]]
        # Anything else might be suspicious activity, go back to initial state
        res_stage = decision_tree['0']

    return res_stage
