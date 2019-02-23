/**
 * @desc import global actions
 */
import {
  actionCreator,
  API_URL,
  checkHttpStatus,
  createRequestActionTypes,
  jsonApiHeader,
  showErrorMessage,
  showSuccessMessage,
  showWarningMessage,
} from './../../utils/utilActions';

  // export global actions to use in payer actions.
export {
  actionCreator,
  checkHttpStatus,
  jsonApiHeader,
  showErrorMessage,
  showSuccessMessage,
  showWarningMessage,
};

// API constants definitions.
export const API_CARE_CONS_REQUEST = `${API_URL}/client/request-consultation`;
export const API_CLIENT = `${API_URL}/client`;

// API actions definitions.
export const PublicActionTypes = {
  submit_Client_Onboarding: createRequestActionTypes('CLIENT_ONBOARDING'),
  submit_Care_Cons_Request: createRequestActionTypes('CARE_CONS_REQUEST'),
};

export const MODULE = 'PUBLICPORTAL';
