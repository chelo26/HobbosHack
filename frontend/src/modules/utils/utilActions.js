// import base64 from 'base-64';
// import utf8 from 'utf8';
import history from './../../history';
import moment from 'moment';
import React from 'react';
import { toast } from 'react-toastify';

export const API_URL = process.env.REACT_APP_BACKEND_BASE_URL;

/**
 * 
 * @param {*} dispatch 
 * @param {*} getState 
 * @param {*} API_NAME 
 * @param {*} REQUEST_METHOD 
 * @param {*} METHOD_BODY 
 * @param {*} AdminActionTypes 
 * @param {*} SUCCESS_MESSAGE 
 */
// export const edyncareFetch = 
export function edyncareFetch (dispatch, getState, API_NAME, REQUEST_METHOD, METHOD_BODY, AdminActionTypes, SUCCESS_MESSAGE) {

  dispatch(actionCreator(AdminActionTypes.REQUEST));
  let METHOD_OBJECT = null; 
  if (METHOD_BODY === 'post' || METHOD_BODY === 'put') {
    METHOD_OBJECT = {
      method: REQUEST_METHOD,
      body: METHOD_BODY,
      headers: jsonApiHeader('application/json'),
    };
  } else {
    METHOD_OBJECT = {
      method: REQUEST_METHOD,
      headers: jsonApiHeader('application/json'),
    };
  }

  if (API_NAME && METHOD_OBJECT) {
    fetch(API_NAME, METHOD_OBJECT)
    .then(checkHttpStatus)
    .then(function(response) {
      dispatch(actionCreator(AdminActionTypes.SUCCESS, response));
      if (SUCCESS_MESSAGE) showSuccessMessage(SUCCESS_MESSAGE);
    })
    .catch(function(error) {        
      console.log(error);        
      dispatch(actionCreator(AdminActionTypes.FAILURE, error));
    }); 
  }
}

const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';
/**
 * @desc Action types creator - to create REQUEST / SUCCESS / FAILURE action types.
 * @param {*} base 
 */
export function createRequestActionTypes(base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((requestTypes, type) => {
    requestTypes[type] = `${base}_${type}`;
    return requestTypes;
  }, {});
}

/**
 * @desc API request headers.
 * @param {*} ContentType - application/json
 */
export const jsonApiHeader = (ContentType, accessToken) => {
  if (!accessToken) {
    var accessToken= localStorage.getItem('id_token')
  } 
  return ({
    'Content-Type': ContentType ? ContentType : 'application/json',
    'Authorization': accessToken ? `Bearer ${accessToken}` : '',
    // 'Timezone': calculateTimeZone(),
    // 'IPAddress': GlobalVariables.IpAddress,
    // 'LocationID': GlobalVariables.CurrentLocationId ? GlobalVariables.CurrentLocationId : 0,
  });
};

/**
 * @desc set action type / payload(json data)
 * @param {*} actionType 
 * @param {*} data 
 */
export function actionCreator(actionType, data) {
  return {
    type: actionType,
    payload: data,
  };
}

/**
 * @desc to check api request status - 200 - success and update / 400 - delete
 * @param {*} response - json
 */
export function checkHttpStatus(response) {
  if (response.status >= 200 && response.status < 204) {
    return response.json();
  } else if (response.status === 204) {
    return true;
  } else if (response.status >= 400 && response.status < 500) {
    return response.json();
  } else {
    var error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

/**
 * @desc To show error messages.
 * @param {*} message
 */
export const showErrorMessage = (message) => {
  return (
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
    })
  );
};

/**
 * @desc To show success messages.
 * @param {*} message
 */
export const showSuccessMessage = (message) => {
  return (
    toast.success(message, {
      position: toast.POSITION.TOP_RIGHT,
    })
  );
};

/**
 * @desc To show warning messages.
 * @param {*} message
 */
export const showWarningMessage = (message) => {
  return (
    toast.warning(message, {
      position: toast.POSITION.TOP_RIGHT,
    })
  );
};
