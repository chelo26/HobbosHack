/**
 * @desc Global actions used for each modules.
 */

import React from 'react';
export const API_URL = process.env.REACT_APP_BACKEND_BASE_URL;

/**
 * @desc To create request types(REQUEST/SUCCESS/FAILURE) - for the Actions.
 * @param {*} base 
 */
const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

export function createRequestActionTypes(base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((requestTypes, type) => {
    requestTypes[type] = `${base}_${type}`;
    return requestTypes;
  }, {});
}

/**
 * @desc checkHttpStatus to check response status(200/204/500 etc)
 * @param {*} response 
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