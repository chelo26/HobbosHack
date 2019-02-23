import { jsonApiHeader } from './../../../../utils/utilActions';

const asyncValidate = (values) => {
  if (values.Email) {
    return fetch(process.env.REACT_APP_BACKEND_BASE_URL + 'client/validate-email/' + values.Email, {
      method: "GET",
      headers: jsonApiHeader('application/json'),
    }).then(response => {
      if (response.status === 409) {
        throw {
          Email: "Email is taken."
        }
      }
    });
  }
  if (values.postCode) {
    return fetch(process.env.REACT_APP_BACKEND_BASE_URL + 'postcode/' + values.postCode, {
      method: "GET",
      headers: jsonApiHeader('application/json'),
    }).then(response => {
      if (response.status === 404) {
        throw {
          postCode: "not valid."
        }
      }
    });
  }
  {/*
      if (values.recipient.postCode) {
      return fetch(process.env.REACT_APP_BACKEND_BASE_URL + 'postcode/' + values.recipient.postCode, {
      method: "GET",
      }).then(response => {
      if (response.status === 404) {
      throw {
      recipient: {
      postCode: "not valid."
      }
      }
      }
      });
      }*/}

}

export default asyncValidate;
