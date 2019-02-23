const carerOnBoardingValidation = values => {
  const errors = {
    name: {},
    DBS: {},
    address: {}
  };
  const name = values.name || {};
  const DBS = values.DBS || {};
  const address = values.address || {};

  if (!name.firstName) {
    errors.name.firstName = 'Required'
  }
  if (!name.surname) {
    errors.name.surname = 'Required'
  }
  if (!name.houseNumber) {
    errors.name.houseNumber = 'Required'
  }
  if (!values.Email) {
    errors.Email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)) {
    errors.Email = 'Invalid email address'
  }
  if (!values.phoneContact) {
    errors.phoneContact = 'Required'
  } else if (!/^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/i.test(values.phoneContact)) {
    errors.phoneContact = 'Invalid Telephone number'
  }
  if (!values.gender) {
    errors.gender = 'Required'
  }
  if (!values.dateOfBirth) {
    errors.dateOfBirth = 'Required'
  }
  if (!address.houseNumber) {
    errors.address.houseNumber = 'Required'
  }
  if (!address.street) {
    errors.address.street = 'Required'
  }
  if (!address.town) {
    errors.address.town = 'Required'
  }
  if (!address.postCode) {
    errors.address.postCode = 'Required'
  }
  if (!values.interest) {
    errors.interest = 'Required'
  }
  if (!values.nationality) {
    errors.nationality = 'Required'
  }

  if (!values.postCode) {
    errors.postCode = 'Required'
  } else if (!/[A-Z]{1,2}[0-9][0-9A-Z]?\s?[0-9][A-Z]{2}/g.test(values.postCode)) {
    errors.postCode = 'Invalid post code'
  }
  if (!values.yearsOfExp) {
    errors.yearsOfExp = 'Required'
  }

  if (!values.careQualification) {
    errors.careQualification = 'Required'
  }

  if (!values.desiredWorkload) {
    errors.desiredWorkload = 'Required'
  }

  if (!values.typeOfWork) {
    errors.typeOfWork = 'Required'
  }

  if (!values.careExperience) {
    errors.careExperience = 'Required'
  }

  if (!values.careServices) {
    errors.careServices = 'Required'
  }

  if (!values.spokenEnglish) {
    errors.spokenEnglish = 'Required'
  }

  if (!values.rightToWork) {
    errors.rightToWork = 'Required'
  }

  if (!DBS.status) {
    errors.DBS.status = 'Required'
  }

  if (!values.hasSmartPhone) {
    errors.hasSmartPhone = 'Required'
  }

  if (!values.drivingCapacity) {
    errors.drivingCapacity = 'Required'
  }
  if (!values.noticePeriod) {
    errors.noticePeriod = 'Required'
  }

  if (!values.aquisitionChannel) {
    errors.aquisitionChannel = 'Required'
  }

  if (!values.aboutYourself) {
    errors.aboutYourself = 'Required'
  }
  return errors
}

export default carerOnBoardingValidation