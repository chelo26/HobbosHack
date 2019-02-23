import {
  actionCreator,
  API_SAVE_CARER_INFO,
  checkHttpStatus,
  jsonApiHeader,
  showErrorMessage,
  showSuccessMessage,
  showWarningMessage,
  PublicActionTypes,
  API_CARE_CONS_REQUEST,
  API_CLIENT
} from './../constants';

export const submitClientOnboarding = (formData, callback) => {
  return (dispatch)=> {
    dispatch(actionCreator(PublicActionTypes.submit_Client_Onboarding.REQUEST))
    fetch(API_CLIENT, {
      method: 'post',
      body: JSON.stringify(formData, null, 2),
      headers: jsonApiHeader('application/json'),
    })
    .then(checkHttpStatus)
    .then(function (response) {
      dispatch(actionCreator(PublicActionTypes.submit_Client_Onboarding.SUCCESS, response));
      callback(response)
    })
    .catch(function (error) {
      dispatch(actionCreator(PublicActionTypes.submit_Client_Onboarding.FAILURE, error));
      console.log('error', error)
      callback(null, error)
    });
  };
};

export const submitCareConsReq = (formData, callback) => {
  console.log('formData', formData)
  return (dispatch)=> {
    dispatch(actionCreator(PublicActionTypes.submit_Care_Cons_Request.REQUEST))
    fetch(API_CARE_CONS_REQUEST, {
      method: 'post',
      body: JSON.stringify(formData, null, 2),
      headers: jsonApiHeader('application/json'),
    })
    .then(checkHttpStatus)
    .then(function (response) {
      dispatch(actionCreator(PublicActionTypes.submit_Care_Cons_Request.SUCCESS, response));
      callback(response)
    })
    .catch(function (error) {
      dispatch(actionCreator(PublicActionTypes.submit_Care_Cons_Request.FAILURE, error));
      console.log(error);
      callback(null, error)
    });
  };
};

export const submitBlogMailing = (formData) => {
  formData.requestType= 'Blog mailing list'
  console.log('formData', formData)
  
  return (dispatch)=> {
    dispatch(actionCreator(PublicActionTypes.submit_Care_Cons_Request.REQUEST))
    fetch(API_CARE_CONS_REQUEST, {
      method: 'post',
      body: JSON.stringify(formData, null, 2),
      headers: jsonApiHeader('application/json'),
    })
    .then(checkHttpStatus)
    .then(function (response) {
      dispatch(actionCreator(PublicActionTypes.submit_Care_Cons_Request.SUCCESS, response));
    })
    .catch(function (error) {
      dispatch(actionCreator(PublicActionTypes.submit_Care_Cons_Request.FAILURE, error));
      console.log(error);
    });
  };
};

export const submitNewReferral = (formData) => {
  formData.requestType= 'New client referral'
  console.log('formData', formData)
  
  return (dispatch)=> {
    dispatch(actionCreator(PublicActionTypes.submit_Care_Cons_Request.REQUEST))
    fetch(API_CARE_CONS_REQUEST, {
      method: 'post',
      body: JSON.stringify(formData, null, 2),
      headers: jsonApiHeader('application/json'),
    })
    .then(checkHttpStatus)
    .then(function (response) {
      dispatch(actionCreator(PublicActionTypes.submit_Care_Cons_Request.SUCCESS, response));
    })
    .catch(function (error) {
      dispatch(actionCreator(PublicActionTypes.submit_Care_Cons_Request.FAILURE, error));
      console.log(error);
    });
  };
};
