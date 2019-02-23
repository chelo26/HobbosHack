const clientOnBoardingValidation = values => {
  const errors = {
    name: {},
    recipient:{
      name: {}
    },
    DBS: {}
  };
  const name = values.name || {};
  const recipient = values.recipient || {name: {}};

  if (!name.firstName) {
    errors.name.firstName = 'Required'
  }
  if (!name.surname) {
    errors.name.surname = 'Required'
  }
  if (!values.Email) {
    errors.Email = 'Required'
  //} else if (!/^(?:(?:\(?(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?(?:\(?0\)?[\s-]?)?)|(?:\(?0))(?:(?:\d{5}\)?[\s-]?\d{4,5})|(?:\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3}))|(?:\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4})|(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}))(?:[\s-]?(?:x|ext\.?|\#)\d{3,4})?$/i.test(values.Email)) {
  //  errors.Email = 'Invalid email address'
  }
  if (!values.phoneContact) {
    errors.phoneContact = 'Required'
  // } else if (!/^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/i.test(values.phoneContact)) {
  //   errors.phoneContact = 'Invalid Telephone number'
  }
  if (!values.relClientRecipient) {
    errors.relClientRecipient = 'Required'
  }
  if (!values.gender) {
    errors.gender = 'Required'
  }
  if (!values.dateOfBirth) {
    errors.dateOfBirth = 'Required'
  }
  if (!values.nationality) {
    errors.nationality = 'Required'
  }
  if (!values.postCode) {
    errors.postCode = 'Required'
  } else if (!/[A-Z]{1,2}[0-9][0-9A-Z]?\s?[0-9][A-Z]{2}/g.test(values.postCode)) {
    errors.postCode = 'Invalid post code'
  }

  if (!recipient.careNeeds && !recipient.careServices) {
    errors.careNeeds = 'Required'
  }
  if (!recipient.interests) {
    errors.interests = 'Required'
  }
  if (!recipient.careTime) {
    errors.careTime = 'Required'
  }

  return errors
}

export default clientOnBoardingValidation