import moment from 'moment';

import {
  edyncareFetch,
  actionCreator,
  AdminActionTypes,
  checkHttpStatus,
  jsonApiHeader,
  showSuccessMessage,
  showErrorMessage,
  ERROR_MESSAGE_ON_FAILURE,
  API_GET_CLIENT,
  API_GET_USER,
  API_GET_CARER,
  API_SAVE_CARER,
  API_CARE_PLAN,
  API_CARE_PLAN_NEW,
  API_CARE_PLAN_UPDATE,
  API_CARE_PLAN_CREATE_VISITS,
  API_CARE_PLAN_BY_ID,
  API_GET_VISITS,
  API_GET_SCHEDULE,
  API_GET_SCHEDULE_UPDATE,
  API_GENERATE_PAYSLIP_INVOICE,
  API_GET_ALL_PAYSLIPS,
  API_GET_ALL_INVOICES,
  API_GET_PAYSLIP_BY_ID,
  API_GET_INVOICE_BY_ID,
  API_PROCESS_INVOICE_BY_ID,
  API_CALENDER,
  API_SAVE_CLIENT,
  API_NOTES_CREATE,
  API_NOTES_GET,
  API_NOTES_ADD_COMMENT,
  API_FEEDBACK_CREATE,
  API_FEEDBACK_GET,
  API_FEEDBACK_ADD_COMMENT,
  API_GET_CARER_LIST,
  API_CARE_TEAM_REQUEST,
  API_CARE_TEAM_REMOVE,
  API_ASSIGN_CARER_SINGLE,
  API_ASSIGN_CARER_ALL,
  API_DELETE_NOTE,
  API_DELETE_COMMENT,
  API_DELETE_VISIT,
  API_DELETE_VISITS_CAREPLAN,
  API_CREATE_VISIT,
  API_UNASSIGN_CARER_SINGLE,
  API_CHAT_USER_SUBMITTED,
  API_NOTIFICATIONS_GET,
  API_NOTIFICATIONS_UPDATE,
  API_CHAT_USER_ROOMS,
  // API_GET_CARE_TEAM,
  API_PROPOSED_CARERS,
  API_POST_TRAINING,
  API_TRACKING
} from './constants';

/**
 * @desc Get carer information
 * @param {*} searchObj - If no searchobj then return all carers
 *                      - if searchobj then return according to filter.
 */
export const getCarer = (searchObj) => {
  return (dispatch, getState) => {
    dispatch(actionCreator(AdminActionTypes.get_Carer.REQUEST));
    let query_params = searchObj ? searchObj : '';
    fetch(`${API_GET_CARER}/${query_params}`, {
      method: 'get',
      headers: jsonApiHeader('application/json'),
    })
    .then(checkHttpStatus)
    .then(function (response) {
      dispatch(actionCreator(AdminActionTypes.get_Carer.SUCCESS, response));
    })
    .catch(function (error) {
      dispatch(actionCreator(AdminActionTypes.get_Carer.FAILURE, error));
      console.log(error);
      showErrorMessage(ERROR_MESSAGE_ON_FAILURE);
    });
  };
};

// export const getCareTeam = (ClientId) => {
//   return (dispatch, getState) => {
//     dispatch(actionCreator(AdminActionTypes.get_CareTeam.REQUEST));
//     fetch(`${API_GET_CARE_TEAM}/${ClientId}`, {
//       method: 'get',
//       headers: jsonApiHeader('application/json'),
//     })
//     .then(checkHttpStatus)
//     .then(function (response) {
//       dispatch(actionCreator(AdminActionTypes.get_CareTeam.SUCCESS, response));
//     })
//     .catch(function (error) {
//       dispatch(actionCreator(AdminActionTypes.get_CareTeam.FAILURE, error));
//       console.log(error);
//       showErrorMessage(ERROR_MESSAGE_ON_FAILURE);
//     });
//   };
// };

// export const getClientList = (CarerId) => {
//   return (dispatch, getState) => {
//     dispatch(actionCreator(AdminActionTypes.get_CareTeam.REQUEST));
//     fetch(`${API_GET_CARE_TEAM}/${ClientId}`, {
//       method: 'get',
//       headers: jsonApiHeader('application/json'),
//     })
//     .then(checkHttpStatus)
//     .then(function (response) {
//       dispatch(actionCreator(AdminActionTypes.get_CareTeam.SUCCESS, response));
//     })
//     .catch(function (error) {
//       dispatch(actionCreator(AdminActionTypes.get_CareTeam.FAILURE, error));
//       console.log(error);
//       showErrorMessage(ERROR_MESSAGE_ON_FAILURE);
//     });
//   };
// };

export const getCarerProfile = (searchObj) => {
  return (dispatch, getState) => {
    dispatch(actionCreator(AdminActionTypes.get_CarerProfile.REQUEST));
    let query_params = searchObj ? '/'+ searchObj : '';
    fetch(`${API_GET_CARER}${query_params}`, {
      method: 'get',
      headers: jsonApiHeader('application/json'),
    })
    .then(checkHttpStatus)
    .then(function (response) {
      dispatch(actionCreator(AdminActionTypes.get_CarerProfile.SUCCESS, response));
    })
    .catch(function (error) {
      dispatch(actionCreator(AdminActionTypes.get_CarerProfile.FAILURE, error));
      console.log(error);
      showErrorMessage(ERROR_MESSAGE_ON_FAILURE);
    });
  };
};

export const getUser = (UserId) => {
  return (dispatch, getState) => {
    dispatch(actionCreator(AdminActionTypes.get_User.REQUEST));
    fetch(`${API_GET_USER}/${UserId}`, {
      method: 'get',
      headers: jsonApiHeader('application/json'),
    })
    .then(checkHttpStatus)
    .then(function (response) {
      dispatch(actionCreator(AdminActionTypes.get_User.SUCCESS, response));
    })
    .catch(function (error) {
      dispatch(actionCreator(AdminActionTypes.get_User.FAILURE, error));
      // showErrorMessage(ERROR_MESSAGE_ON_FAILURE);
    });
  };
};

/**
 * @desc To save / update carer
 * @param {*} formData
 */
export const saveCarer = (formData) => {

  return (dispatch, getState) => {
    let CarerId = formData.updated.CarerId;
    dispatch(actionCreator(AdminActionTypes.save_Carer.REQUEST));
    fetch(`${API_SAVE_CARER}`, {
      method: 'post',
      body: JSON.stringify(formData, null, 2),
      headers: jsonApiHeader('application/json'),
    })
    .then(checkHttpStatus)
    .then(function (response) {
      dispatch(actionCreator(AdminActionTypes.save_Carer.SUCCESS, response));
      dispatch(getCarer(CarerId));
      showSuccessMessage('Record has been saved successfully.');
    })
    .catch(function (error) {
      dispatch(actionCreator(AdminActionTypes.save_Carer.FAILURE, error));
      console.log(error);
      showErrorMessage(ERROR_MESSAGE_ON_FAILURE);
    });
  };
};

export const saveClient = (formData) => {

  return (dispatch, getState) => {
    let ClientId = formData.updated.ClientId;
    dispatch(actionCreator(AdminActionTypes.save_Client.REQUEST));
    fetch(`${API_SAVE_CLIENT}`, {
      method: 'post',
      body: JSON.stringify(formData, null, 2),
      headers: jsonApiHeader('application/json'),
    })
    .then(checkHttpStatus)
    .then(function (response) {
      dispatch(actionCreator(AdminActionTypes.save_Client.SUCCESS, response));
      dispatch(getClient(ClientId));
      showSuccessMessage('Record has been saved successfully.');
    })
    .catch(function (error) {
      dispatch(actionCreator(AdminActionTypes.save_Client.FAILURE, error));
      console.log(error);
      showErrorMessage(ERROR_MESSAGE_ON_FAILURE);
    });
  };
};

// const secureFetch = (n1, methodHeaders) => {
//   let t1 = n1;
//   // methodHeaders.headers = null;
//   let t2 = methodHeaders;
//   return fetch(t1, t2);
// }

/**
 *
 * @param {*} searchObj
 */
export const getClient = (searchObj) => {

  return (dispatch, getState) => {
    dispatch(actionCreator(AdminActionTypes.get_Client.REQUEST));
    let query_params = searchObj ? searchObj : '';
    fetch(`${API_GET_CLIENT}/${query_params}`, {
      method: 'get',
      headers: jsonApiHeader('application/json'),
    })
    .then(checkHttpStatus)
    .then(function (response) {
      dispatch(actionCreator(AdminActionTypes.get_Client.SUCCESS, response));
    })
    .catch(function (error) {
      dispatch(actionCreator(AdminActionTypes.get_Client.FAILURE, error));
      console.log(error);
      showErrorMessage(ERROR_MESSAGE_ON_FAILURE);
    });
  };
};

/**
 * @desc To save care plan.
 * @param {*} formData
 */
export const newCarePlan = (formData, callback, error) => {
  return (dispatch, getState) => {
    dispatch(actionCreator(AdminActionTypes.new_Care_plan.REQUEST));
    fetch(`${API_CARE_PLAN_NEW}`, {
      method: 'post',
      body: JSON.stringify(formData, null, 2),
      headers: jsonApiHeader('application/json'),
    })
    .then(checkHttpStatus)
    .then(function (response) {
      dispatch(actionCreator(AdminActionTypes.new_Care_plan.SUCCESS, response));
      callback(response, null)
    })
    .catch(function (error) {
      dispatch(actionCreator(AdminActionTypes.new_Care_plan.FAILURE, error));
      showErrorMessage('FAIL- New care plan created');
      callback(null, error)
    });
  };
};

export const saveCarePlan = (formData, callback) => {
  return (dispatch, getState) => {
    dispatch(actionCreator(AdminActionTypes.save_Care_plan.REQUEST));
    fetch(`${API_CARE_PLAN_UPDATE}`, {
      method: 'post',
      body: JSON.stringify(formData, null, 2),
      headers: jsonApiHeader('application/json'),
    })
    .then(checkHttpStatus)
    .then(function (response) {
      dispatch(actionCreator(AdminActionTypes.save_Care_plan.SUCCESS, callback(response)));
    })
    .catch(function (error) {
      dispatch(actionCreator(AdminActionTypes.save_Care_plan.FAILURE, error));
      showErrorMessage(ERROR_MESSAGE_ON_FAILURE);
      callback(error)
    });
  };
};

/**
 * @desc To Get Careplan and careplanbyid - /careplan/careplanId/79d6f5f0-6fd8-11e8-92b8-c9630ab918b3
 * @param {*} searchObj
 */
export const getCarePlan = (searchObj) => {
  console.log('getCarePlan, searchObj', searchObj)
  return (dispatch, getState) => {
    dispatch(actionCreator(AdminActionTypes.get_Care_plan.REQUEST));
    let query_params = searchObj ? searchObj : '';
    fetch(`${API_CARE_PLAN}/${query_params}`, {
      method: 'get',
      headers: jsonApiHeader('application/json'),
    })
    .then(checkHttpStatus)
    .then(function (response) {
      if (query_params !== '') {
        console.log('response', response)
        dispatch(actionCreator(AdminActionTypes.get_Care_plan_list.SUCCESS, response.data));
      } else {
        console.log('response', response)
        dispatch(actionCreator(AdminActionTypes.get_Care_plan_list.SUCCESS, response.data));
      }
    })
    .catch(function (error) {
      dispatch(actionCreator(AdminActionTypes.get_Care_plan.FAILURE, error));
      console.log(error);
      showErrorMessage(ERROR_MESSAGE_ON_FAILURE);
    });
  };
};

/**
 * @desc Get careplan by careplan id
 */
export const getCarePlanById = (searchObj, callback) => {
  return (dispatch, getState) => {
    dispatch(actionCreator(AdminActionTypes.get_Care_plan_by_id.REQUEST));
    let query_params = searchObj ? searchObj : '';
    fetch(`${API_CARE_PLAN_BY_ID}/${query_params}`, {
      method: 'get',
      headers: jsonApiHeader('application/json'),
    })
    .then(checkHttpStatus)
    .then(function (response) {
      dispatch(actionCreator(AdminActionTypes.get_Care_plan_by_id.SUCCESS, response));
      callback(response, null)
    })
    .catch(function (error) {
      dispatch(actionCreator(AdminActionTypes.get_Care_plan_by_id.FAILURE, error));
      callback(null, error)
    });
  };
};

/**
 * @desc - To get visits - examples for searchObj
 * { CarePlanId: '62d1cd20-6ba6-11e8-9421-83143a36b94d' }
 * { ClientId: '62d1cd20-6ba6-11e8-9421-83143a36b94d' }
 * @param {*} searchObj
 */

export const getVisits = (searchObj) => {
  if (!searchObj) {
    searchObj = { 'request': 'All' };
  }
  console.log('searchObj', searchObj)
  return (dispatch, getState) => {
    dispatch(actionCreator(AdminActionTypes.get_Visits.REQUEST));
    fetch(API_GET_VISITS, {
      method: 'post',
      body: JSON.stringify(searchObj, null, 2),
      headers: jsonApiHeader('application/json'),
    })
    .then(checkHttpStatus)
    .then(function (response) {
      dispatch(actionCreator(AdminActionTypes.get_Visits.SUCCESS, response));
    })
    .catch(function (error) {
      dispatch(actionCreator(AdminActionTypes.get_Visits.FAILURE, error));
      console.log(error);
    });
  };
};

export const getMedications = (searchObj) => {
  return (dispatch, getState) => {
    dispatch(actionCreator(AdminActionTypes.get_Visits.REQUEST));
    fetch(API_GET_VISITS, {
      method: 'post',
      body: JSON.stringify(searchObj, null, 2),
      headers: jsonApiHeader('application/json'),
    })
    .then(checkHttpStatus)
    .then(function (response) {
      dispatch(actionCreator(AdminActionTypes.get_Visits.SUCCESS, response));
    })
    .catch(function (error) {
      dispatch(actionCreator(AdminActionTypes.get_Visits.FAILURE, error));
      console.log(error);
    });
  };
};


export const getSchedule = (formData) => {
  return (dispatch, getState) => {
    let request = {
      'CarerId': formData,
    };
    dispatch(actionCreator(AdminActionTypes.get_Schedule.REQUEST));
    fetch(`${API_GET_SCHEDULE}`, {
      method: 'post',
      body: JSON.stringify(request, null, 2),
      headers: jsonApiHeader('application/json'),
    })
    .then(checkHttpStatus)
    .then(function (response) {
      dispatch(actionCreator(AdminActionTypes.get_Schedule.SUCCESS, response));
      // dispatch(getCarer(CarerId));
      // showSuccessMessage('Schedule has been returned successfully.');
    })
    .catch(function (error) {
      dispatch(actionCreator(AdminActionTypes.get_Schedule.FAILURE, error));
      console.log(error);
    });
  };
};

export const updateSchedule = (request) => {
  return (dispatch, getState) => {
    dispatch(actionCreator(AdminActionTypes.update_Schedule.REQUEST));
    fetch(`${API_GET_SCHEDULE_UPDATE}`, {
      method: 'post',
      body: JSON.stringify(request, null, 2),
      headers: jsonApiHeader('application/json'),
    })
    .then(checkHttpStatus)
    .then(function (response) {
      dispatch(actionCreator(AdminActionTypes.update_Schedule.SUCCESS, response));
      dispatch(getCarer(request.CarerId));
      // showSuccessMessage('Schedule has been returned successfully.');
    })
    .catch(function (error) {
      dispatch(actionCreator(AdminActionTypes.update_Schedule.FAILURE, error));
      console.log(error);
    });
  };
};

export const generateInvoicePayslip = (formData, callback) => {
  return (dispatch, getState) => {
    dispatch(actionCreator(AdminActionTypes.generate_payslip_invoice.REQUEST));
    fetch(`${API_GENERATE_PAYSLIP_INVOICE}`, {
      method: 'post',
      body: JSON.stringify(formData, null, 2),
      headers: jsonApiHeader('application/json'),
    })
    .then(checkHttpStatus)
    .then(function (response) {
      dispatch(actionCreator(AdminActionTypes.generate_payslip_invoice.SUCCESS, response));
      callback(response, null)
      showSuccessMessage('Invoice and payslip generated');
    })
    .catch(function (error) {
      dispatch(actionCreator(AdminActionTypes.generate_payslip_invoice.FAILURE, error));
      callback(null, error)
    });
  };
};

export const getAllPayslips = () => {
  return (dispatch, getState) => {
    dispatch(actionCreator(AdminActionTypes.get_all_payslips.REQUEST));
    fetch(`${API_GET_ALL_PAYSLIPS}`, {
      method: 'get',
    })
    .then(checkHttpStatus)
    .then(function (response) {
      dispatch(actionCreator(AdminActionTypes.get_all_payslips.SUCCESS, response));
    })
    .catch(function (error) {
      dispatch(actionCreator(AdminActionTypes.get_all_payslips.FAILURE, error));
      showErrorMessage('Something went wrong');
      console.error(error);
    });
  };
};

export const getAllInvoices = () => {
  return (dispatch, getState) => {
    dispatch(actionCreator(AdminActionTypes.get_all_invoices.REQUEST));
    fetch(`${API_GET_ALL_INVOICES}`, {
      method: 'get',
    })
    .then(checkHttpStatus)
    .then(function (response) {
      dispatch(actionCreator(AdminActionTypes.get_all_invoices.SUCCESS, response));
    })
    .catch(function (error) {
      dispatch(actionCreator(AdminActionTypes.get_all_invoices.FAILURE, error));
      showErrorMessage('Something went wrong');
      console.error(error);
    });
  };
};


export const getPayslipById = (id) => {
  return (dispatch, getState) => {
    let query_params = id ? id : '';
    dispatch(actionCreator(AdminActionTypes.get_payslip_by_id.REQUEST));
    fetch(`${API_GET_PAYSLIP_BY_ID}/${query_params}`, {
      method: 'get',
    })
    .then(checkHttpStatus)
    .then(function (response) {
      dispatch(actionCreator(AdminActionTypes.get_payslip_by_id.SUCCESS, response));
    })
    .catch(function (error) {
      dispatch(actionCreator(AdminActionTypes.get_payslip_by_id.FAILURE, error));
      showErrorMessage('Something went wrong');
      console.error(error);
    });
  };
};

export const getInvoiceById = (id) => {
  return (dispatch, getState) => {
    let query_params = id ? id : '';
    dispatch(actionCreator(AdminActionTypes.get_invoice_by_id.REQUEST));
    fetch(`${API_GET_INVOICE_BY_ID}/${query_params}`, {
      method: 'get',
    })
    .then(checkHttpStatus)
    .then(function (response) {
      dispatch(actionCreator(AdminActionTypes.get_invoice_by_id.SUCCESS, response));
    })
    .catch(function (error) {
      dispatch(actionCreator(AdminActionTypes.get_invoice_by_id.FAILURE, error));
      showErrorMessage('Something went wrong');
      console.error(error);
    });
  };
};

export const processCharge= (InvoiceId, callback)=> {
  let request = {
    'InvoiceId': InvoiceId
  };
  return (dispatch, getState) => {
    dispatch(actionCreator(AdminActionTypes.process_Invoice_By_Id.REQUEST));
    fetch(`${API_PROCESS_INVOICE_BY_ID}`, {
      method: 'post',
      body: JSON.stringify(request, null, 2),
    })
    .then(checkHttpStatus)
    .then(function (response) {
      dispatch(actionCreator(AdminActionTypes.process_Invoice_By_Id.SUCCESS, response));
      callback(response, null)
      showSuccessMessage(response);
    })
    .catch(function (error) {
      dispatch(actionCreator(AdminActionTypes.process_Invoice_By_Id.FAILURE, error));
      callback(null, error)
      showErrorMessage(error);
    });
  }
}


export const getCaleneder1M = (month) => {
  return (dispatch, getState) => {
    dispatch(actionCreator(AdminActionTypes.get_Calendler_Visits_1M));
    fetch(`${API_CALENDER}/month/${month}`, {
      method: 'get',
      headers: jsonApiHeader('application/json'),
    })
      .then(checkHttpStatus)
      .then(function (response) {
        dispatch(actionCreator(AdminActionTypes.get_Calendler_Visits_1M.SUCCESS, response));
        // showSuccessMessage('Schedule has been returned successfully.');
      })
      .catch(function (error) {
        dispatch(actionCreator(AdminActionTypes.get_Calendler_Visits_1M.FAILURE, error));
        console.log(error);
      });
  };
};

export const getCaleneder1D = (date) => {
  return (dispatch, getState) => {
    dispatch(actionCreator(AdminActionTypes.get_Calendler_Visits_1D));
    fetch(`${API_CALENDER}/day/${date}`, {
      method: 'get',
      headers: jsonApiHeader('application/json'),
    })
      .then(checkHttpStatus)
      .then(function (response) {
        dispatch(actionCreator(AdminActionTypes.get_Calendler_Visits_1D.SUCCESS, response));
        // showSuccessMessage('Schedule has been returned successfully.');
      })
      .catch(function (error) {
        dispatch(actionCreator(AdminActionTypes.get_Calendler_Visits_1D.FAILURE, error));
        console.log(error);
      });
  };
};


export const getCaleneder1WUser = (week, UserId) => {
  return (dispatch, getState) => {
    dispatch(actionCreator(AdminActionTypes.get_Calendler_Visits_1W_User));
    fetch(`${API_CALENDER}/week/${week}/${UserId}`, {
      method: 'get',
      headers: jsonApiHeader('application/json'),
    })
      .then(checkHttpStatus)
      .then(function (response) {
        dispatch(actionCreator(AdminActionTypes.get_Calendler_Visits_1W_User.SUCCESS, response));
        // showSuccessMessage('Schedule has been returned successfully.');
      })
      .catch(function (error) {
        dispatch(actionCreator(AdminActionTypes.get_Calendler_Visits_1W_User.FAILURE, error));
        console.log(error);
      });
  };
};

export const getCaleneder1WCarer = (week, UserId) => {
  return (dispatch, getState) => {
    dispatch(actionCreator(AdminActionTypes.get_Calendler_Visits_1W_Carer));
    fetch(`${API_CALENDER}/week-carer/${week}/${UserId}`, {
      method: 'get',
      headers: jsonApiHeader('application/json'),
    })
      .then(checkHttpStatus)
      .then(function (response) {
        dispatch(actionCreator(AdminActionTypes.get_Calendler_Visits_1W_Carer.SUCCESS, response));
        // showSuccessMessage('Schedule has been returned successfully.');
      })
      .catch(function (error) {
        dispatch(actionCreator(AdminActionTypes.get_Calendler_Visits_1W_Carer.FAILURE, error));
        console.log(error);
      });
  };
};


export const createNote = (formData) => {

  return (dispatch, getState) => {
    let CarerId = formData.CarerId;
    dispatch(actionCreator(AdminActionTypes.create_note.REQUEST));
    fetch(`${API_NOTES_CREATE}/${CarerId}`, {
      method: 'post',
      headers: jsonApiHeader('application/json'),
      body: JSON.stringify(formData, null, 2),
    })
    .then(checkHttpStatus)
    .then(function (response) {
      dispatch(actionCreator(AdminActionTypes.create_note.SUCCESS, response));
      dispatch(getNotes(CarerId));
      showSuccessMessage('Record has been saved successfully.');
    })
    .catch(function (error) {
      dispatch(actionCreator(AdminActionTypes.create_note.FAILURE, error));
      showErrorMessage(ERROR_MESSAGE_ON_FAILURE);
    });
  };
};

export const createFeedback= (formData, callback) => {

  return (dispatch, getState) => {
    let UserId = formData.UserId;
    dispatch(actionCreator(AdminActionTypes.create_note.REQUEST));
    fetch(`${API_FEEDBACK_CREATE}/${UserId}`, {
      method: 'post',
      headers: jsonApiHeader('application/json'),
      body: JSON.stringify(formData, null, 2),
    })
    .then(checkHttpStatus)
    .then(function (response) {
      dispatch(actionCreator(AdminActionTypes.create_note.SUCCESS, response));
      dispatch(getFeedbacks(UserId));
      callback(response)
    })
    .catch(function (error) {
      dispatch(actionCreator(AdminActionTypes.create_note.FAILURE, error));
      callback(null, error)
      showErrorMessage(ERROR_MESSAGE_ON_FAILURE);
    });
  };
};

export const getNotes = (formData) => {

  return (dispatch, getState) => {
    let CarerId = formData;
    dispatch(actionCreator(AdminActionTypes.get_notes.REQUEST));
    fetch(`${API_NOTES_GET}/${CarerId}`, {
      headers: jsonApiHeader('application/json'),
      method: 'get',
    })
    .then(checkHttpStatus)
    .then(function (response) {
      dispatch(actionCreator(AdminActionTypes.get_notes.SUCCESS, response));
      showSuccessMessage('Notes loaded successfully.');
    })
    .catch(function (error) {
      dispatch(actionCreator(AdminActionTypes.get_notes.FAILURE, error));
      showErrorMessage(ERROR_MESSAGE_ON_FAILURE);
    });
  };
};

export const getFeedbacks= (formData) => {

  return (dispatch, getState) => {
    let ClientId = formData;
    dispatch(actionCreator(AdminActionTypes.get_Feedback.REQUEST));
    fetch(`${API_FEEDBACK_GET}/${ClientId}`, {
      headers: jsonApiHeader('application/json'),
      method: 'get',
    })
    .then(checkHttpStatus)
    .then(function (response) {
      dispatch(actionCreator(AdminActionTypes.get_Feedback.SUCCESS, response));
    })
    .catch(function (error) {
      dispatch(actionCreator(AdminActionTypes.get_Feedback.FAILURE, error));
      showErrorMessage(ERROR_MESSAGE_ON_FAILURE);
    });
  };
};


export const addComment = (formData, CarerId) => {

  return (dispatch, getState) => {
    let NoteId = formData.updated.Id;
    dispatch(actionCreator(AdminActionTypes.add_comment.REQUEST));
    fetch(`${API_NOTES_ADD_COMMENT}/${NoteId}`, {
      method: 'post',
      headers: jsonApiHeader('application/json'),
      body: JSON.stringify(formData, null, 2),
    })
    .then(checkHttpStatus)
    .then(function (response) {
      dispatch(actionCreator(AdminActionTypes.add_comment.SUCCESS, response));
      dispatch(getNotes(CarerId));
      showSuccessMessage('Record has been saved successfully.');
    })
    .catch(function (error) {
      dispatch(actionCreator(AdminActionTypes.add_comment.FAILURE, error));
      showErrorMessage(ERROR_MESSAGE_ON_FAILURE);
    });
  };
};


export const addFeedbackComment = (formData, CarerId) => {

  return (dispatch, getState) => {
    let NoteId = formData.updated.Id;
    dispatch(actionCreator(AdminActionTypes.add_comment.REQUEST));
    fetch(`${API_FEEDBACK_ADD_COMMENT}/${NoteId}`, {
      method: 'post',
      headers: jsonApiHeader('application/json'),
      body: JSON.stringify(formData, null, 2),
    })
    .then(checkHttpStatus)
    .then(function (response) {
      dispatch(actionCreator(AdminActionTypes.add_comment.SUCCESS, response));
      dispatch(getFeedbacks(CarerId));
    })
    .catch(function (error) {
      dispatch(actionCreator(AdminActionTypes.add_comment.FAILURE, error));
      showErrorMessage(ERROR_MESSAGE_ON_FAILURE);
    });
  };
};

export const getCarersList = (ClientId) => {
  return (dispatch, getState) => {
    dispatch(actionCreator(AdminActionTypes.get_carer_list.REQUEST));
    fetch(`${API_GET_CARER_LIST}/${ClientId}`, {
      method: 'get',
      headers: jsonApiHeader('application/json'),
    })
    .then(checkHttpStatus)
    .then(function (response) {
      dispatch(actionCreator(AdminActionTypes.get_carer_list.SUCCESS, response));
    })
    .catch(function (error) {
      dispatch(actionCreator(AdminActionTypes.get_carer_list.FAILURE, error));
      showErrorMessage(ERROR_MESSAGE_ON_FAILURE);
    });
  };
};

export const getCarersListSingle = (ClientId, VisitId) => {
  return (dispatch, getState) => {
    dispatch(actionCreator(AdminActionTypes.get_carer_list.REQUEST));
    fetch(`${API_GET_CARER_LIST}/${ClientId}/${VisitId}`, {
      method: 'get',
      headers: jsonApiHeader('application/json'),
    })
      .then(checkHttpStatus)
      .then(function (response) {
        dispatch(actionCreator(AdminActionTypes.get_carer_list.SUCCESS, response));
      })
      .catch(function (error) {
        dispatch(actionCreator(AdminActionTypes.get_carer_list.FAILURE, error));
        showErrorMessage(ERROR_MESSAGE_ON_FAILURE);
      });
  };
};


export const getCareTeamList= (ClientId)=> {
  return (dispatch, getState) => {
    dispatch(actionCreator(AdminActionTypes.get_Care_Team.REQUEST));
    fetch(`${API_CARE_TEAM_REQUEST}/${ClientId}`, {
      method: 'get',
      headers: jsonApiHeader('application/json'),
    })
    .then(checkHttpStatus)
    .then(function (response) {
      dispatch(actionCreator(AdminActionTypes.get_Care_Team.SUCCESS, response));
    })
    .catch(function (error) {
      dispatch(actionCreator(AdminActionTypes.get_Care_Team.FAILURE, error));
      showErrorMessage(ERROR_MESSAGE_ON_FAILURE);
    });
  };
};


export const addToCareTeam = (requestData, callback) => {
  return (dispatch, getState) => {
    dispatch(actionCreator(AdminActionTypes.add_to_care_team.REQUEST));
    fetch(`${API_CARE_TEAM_REQUEST}`, {
      method: 'post',
      body: JSON.stringify(requestData, null, 2),
      headers: jsonApiHeader('application/json'),
    })
    .then(checkHttpStatus)
    .then(function (response) {
      dispatch(actionCreator(AdminActionTypes.add_to_care_team.SUCCESS, response));
      callback(response)
    })
    .catch(function (error) {
      dispatch(actionCreator(AdminActionTypes.add_to_care_team.FAILURE, error));
      callback(null, error)
      console.log(error);
    });
  };
};

export const removeFromCareTeam = (requestData, callback) => {
  return (dispatch, getState) => {
    dispatch(actionCreator(AdminActionTypes.remove_from_Care_Team.REQUEST));
    fetch(`${API_CARE_TEAM_REMOVE}`, {
      method: 'post',
      body: JSON.stringify(requestData, null, 2),
      headers: jsonApiHeader('application/json'),
    })
    .then(checkHttpStatus)
    .then(function (response) {
      dispatch(actionCreator(AdminActionTypes.remove_from_Care_Team.SUCCESS, response));
      callback(response, null)
    })
    .catch(function (error) {
      dispatch(actionCreator(AdminActionTypes.remove_from_Care_Team.FAILURE, error));
      callback(null, error)
    });
  };
};

export const assignCarerSingle = (requestData, callback) => {

  return (dispatch, getState) => {
    dispatch(actionCreator(AdminActionTypes.assign_Carer_Single.REQUEST));
    fetch(`${API_ASSIGN_CARER_SINGLE}`, {
      method: 'put',
      body: JSON.stringify(requestData, null, 2),
      headers: jsonApiHeader('application/json'),
    })
    .then(checkHttpStatus)
    .then(function (response) {
      dispatch(actionCreator(AdminActionTypes.assign_Carer_Single.SUCCESS, response));
      showSuccessMessage('Carer assigned');
      callback(response)
    })
    .catch(function (error) {
      dispatch(actionCreator(AdminActionTypes.assign_Carer_Single.FAILURE, error));
      showErrorMessage('Can not assign visit to this carer');
      callback(null, error)
    });
  };
};

export const assignCarerAll = (requestData, callback) => {
  return (dispatch, getState) => {
    dispatch(actionCreator(AdminActionTypes.assign_Carer_All.REQUEST));
    fetch(`${API_ASSIGN_CARER_ALL}`, {
      method: 'put',
      body: JSON.stringify(requestData, null, 2),
      headers: jsonApiHeader('application/json'),
    })
    .then(checkHttpStatus)
    .then(function (response) {
      dispatch(actionCreator(AdminActionTypes.assign_Carer_All.SUCCESS, response));
      callback(response, null)
    })
    .catch(function (error) {
      dispatch(actionCreator(AdminActionTypes.assign_Carer_All.FAILURE, error));
      callback(null, error)
    });
  };
};

export const deleteNote = (NoteId, CarerId) => {
  return (dispatch, getState) => {
    dispatch(actionCreator(AdminActionTypes.delete_note.REQUEST));
    fetch(`${API_DELETE_NOTE}/${NoteId}`, {
      method: 'put',
      headers: jsonApiHeader('application/json'),
    })
      .then(checkHttpStatus)
      .then(function (response) {
        dispatch(actionCreator(AdminActionTypes.delete_note.SUCCESS, response));
        dispatch(getNotes(CarerId));
        showSuccessMessage('Record has deleted successfully.');
      })
      .catch(function (error) {
        dispatch(actionCreator(AdminActionTypes.delete_note.FAILURE, error));
        showErrorMessage(ERROR_MESSAGE_ON_FAILURE);
      });
  };
};

export const deleteComment = (NoteId, element, CarerId, j) => {
  return (dispatch, getState) => {
    const requestData = {
      Id: NoteId,
      element: element,
      index: j,
    };
    dispatch(actionCreator(AdminActionTypes.delete_note.REQUEST));
    fetch(`${API_DELETE_COMMENT}`, {
      method: 'put',
      body: JSON.stringify(requestData, null, 2),
      headers: jsonApiHeader('application/json'),
    })
      .then(checkHttpStatus)
      .then(function (response) {
        dispatch(actionCreator(AdminActionTypes.delete_note.SUCCESS, response));
        dispatch(getNotes(CarerId));
        showSuccessMessage('Record has deleted successfully.');
      })
      .catch(function (error) {
        dispatch(actionCreator(AdminActionTypes.delete_note.FAILURE, error));
        showErrorMessage(ERROR_MESSAGE_ON_FAILURE);
      });
  };
};

export const deleteVisit = (visitId) => {
  return (dispatch, getState) => {
    dispatch(actionCreator(AdminActionTypes.delete_visit.REQUEST));
    fetch(`${API_DELETE_VISIT}/${visitId}`, {
      method: 'put',
      headers: jsonApiHeader('application/json'),
    })
      .then(checkHttpStatus)
      .then(function (response) {
        dispatch(actionCreator(AdminActionTypes.delete_visit.SUCCESS, response));
        showSuccessMessage('Record has deleted successfully.');
        dispatch(getCaleneder1M(eval(moment().format("M"))));
      })
      .catch(function (error) {
        dispatch(actionCreator(AdminActionTypes.delete_visit.FAILURE, error));
        showErrorMessage(ERROR_MESSAGE_ON_FAILURE);
      });
  };
};

export const deleteVisitsCareplan = (careplanId) => {
  return (dispatch, getState) => {
    dispatch(actionCreator(AdminActionTypes.delete_visits_careplan.REQUEST));
    fetch(`${API_DELETE_VISITS_CAREPLAN}/${careplanId}`, {
      method: 'put',
      headers: jsonApiHeader('application/json'),
    })
    .then(checkHttpStatus)
    .then(function (response) {
      dispatch(actionCreator(AdminActionTypes.delete_visits_careplan.SUCCESS, response));
      showSuccessMessage('Record has deleted successfully.');
      dispatch(dispatch(getVisits({ CarePlanId: careplanId })))
    })
    .catch(function (error) {
      dispatch(actionCreator(AdminActionTypes.delete_visits_careplan.FAILURE, error));
      showErrorMessage(ERROR_MESSAGE_ON_FAILURE);
    });
  };
};

export const createVisit = (formData) => {
  let requestData= formData
  console.log('requestData', requestData)

  return (dispatch, getState)=> {
    dispatch(actionCreator(AdminActionTypes.create_Visit.REQUEST));
    fetch(`${API_CREATE_VISIT}`, {
      method: 'PUT',
      body: JSON.stringify(requestData, null, 2),
      headers: jsonApiHeader('application/json'),
    })
    .then(checkHttpStatus)
    .then((response)=> {
      dispatch(actionCreator(AdminActionTypes.create_Visit.SUCCESS, response));
      showSuccessMessage('Visit created');
    })
    .catch((error)=> {
      dispatch(actionCreator(AdminActionTypes.create_Visit.FAILURE, error))
      error.response.json().then(body => {
        showErrorMessage(body.message)
      })
    })
  }
}

export const unassignVisitSingle = (visit, callback) => {
  return (dispatch, getState) => {
    dispatch(actionCreator(AdminActionTypes.unassign_carer_single.REQUEST));
    fetch(`${API_UNASSIGN_CARER_SINGLE}`, {
      method: 'put',
      body: JSON.stringify(visit, null, 2),
      headers: jsonApiHeader('application/json'),
    })
    .then(checkHttpStatus)
    .then(function (response) {
      dispatch(actionCreator(AdminActionTypes.unassign_carer_single.SUCCESS, response));
      callback(response)
    })
    .catch(function (error) {
      dispatch(actionCreator(AdminActionTypes.unassign_carer_single.FAILURE, error));
      showErrorMessage(ERROR_MESSAGE_ON_FAILURE);
      callback(null, error)
    });
  };
};

export const chatUserSubmitted = (userName) => {
  return (dispatch, getState) => {
    dispatch(actionCreator(AdminActionTypes.chat_user.REQUEST));
    fetch(`${API_CHAT_USER_SUBMITTED}`, {
      method: 'post',
      body: JSON.stringify(userName, null, 2),
      headers: jsonApiHeader('application/json'),
    })
      .then(checkHttpStatus)
      .then(function (response) {
        dispatch(actionCreator(AdminActionTypes.chat_user.SUCCESS, response));
      })
      .catch(function (error) {
        console.log('error', error);
        dispatch(actionCreator(AdminActionTypes.chat_user.FAILURE, error));
        showErrorMessage(ERROR_MESSAGE_ON_FAILURE);
      });
  };
};


export const getNotifications = (request) => {
  return (dispatch, getState) => {
    dispatch(actionCreator(AdminActionTypes.get_Notifications.REQUEST));
    fetch(`${API_NOTIFICATIONS_GET}`, {
      method: 'POST',
      body: JSON.stringify(request, null, 2),
      headers: jsonApiHeader('application/json'),
    })
      .then(checkHttpStatus)
      .then(function (response) {
        dispatch(actionCreator(AdminActionTypes.get_Notifications.SUCCESS, response));
      })
      .catch(function (error) {
        dispatch(actionCreator(AdminActionTypes.get_Notifications.FAILURE, error));
        showErrorMessage(ERROR_MESSAGE_ON_FAILURE);
      });
  };
};

export const updateNotifications = (request) => {
  return (dispatch, getState) => {
    dispatch(actionCreator(AdminActionTypes.update_Notifications.REQUEST));
    fetch(`${API_NOTIFICATIONS_UPDATE}`, {
      method: 'POST',
      body: JSON.stringify(request, null, 2),
      headers: jsonApiHeader('application/json'),
    })
      .then(checkHttpStatus)
      .then(function (response) {
        dispatch(actionCreator(AdminActionTypes.update_Notifications.SUCCESS, response));
      })
      .catch(function (error) {
        dispatch(actionCreator(AdminActionTypes.update_Notifications.FAILURE, error));
        showErrorMessage(ERROR_MESSAGE_ON_FAILURE);
      });
  };
};

export const getUserRooms = (id) => {
  return (dispatch, getState) => {
    dispatch(actionCreator(AdminActionTypes.chat_user_rooms.REQUEST));
    fetch(`${API_CHAT_USER_ROOMS}/${id}`, {
      method: 'get',
      headers: jsonApiHeader('application/json'),
    })
      .then(checkHttpStatus)
      .then(function (response) {
        dispatch(actionCreator(AdminActionTypes.chat_user_rooms.SUCCESS, response));
      })
      .catch(function (error) {
        dispatch(actionCreator(AdminActionTypes.chat_user_rooms.FAILURE, error));
        showErrorMessage(ERROR_MESSAGE_ON_FAILURE);
      });
  };
};

export const getCarersProp = (request ) => {
  return (dispatch, getState) => {
    dispatch(actionCreator(AdminActionTypes.get_Carers_Prop.REQUEST));
    fetch(`${API_PROPOSED_CARERS}`, {
      method: 'POST',
      body: JSON.stringify(request, null, 2),
      headers: jsonApiHeader('application/json'),
    })
    .then(checkHttpStatus)
    .then(function (response) {
      dispatch(actionCreator(AdminActionTypes.get_Carers_Prop.SUCCESS, response));
    })
    .catch(function (error) {
      dispatch(actionCreator(AdminActionTypes.get_Carers_Prop.FAILURE, error));
      showErrorMessage(ERROR_MESSAGE_ON_FAILURE);
    });
  };
};

export const getAllCarersProp = (request ) => {
  return (dispatch, getState) => {
    dispatch(actionCreator(AdminActionTypes.get_All_Carers_Prop.REQUEST));
    fetch(`${API_PROPOSED_CARERS}`, {
      method: 'POST',
      body: JSON.stringify(request, null, 2),
      headers: jsonApiHeader('application/json'),
    })
    .then(checkHttpStatus)
    .then(function (response) {
      dispatch(actionCreator(AdminActionTypes.get_All_Carers_Prop.SUCCESS, response));
    })
    .catch(function (error) {
      dispatch(actionCreator(AdminActionTypes.get_All_Carers_Prop.FAILURE, error));
      showErrorMessage(ERROR_MESSAGE_ON_FAILURE);
    });
  };
};


export const updateProposedCarers = (request, callback ) => {
  return (dispatch, getState) => {
    dispatch(actionCreator(AdminActionTypes.update_Propsed_Carers.REQUEST));
    fetch(`${API_PROPOSED_CARERS}`, {
      method: 'POST',
      body: JSON.stringify(request, null, 2),
      headers: jsonApiHeader('application/json'),
    })
    .then(checkHttpStatus)
    .then(function (response) {
      dispatch(actionCreator(AdminActionTypes.update_Propsed_Carers.SUCCESS, response));
      callback(response)
    })
    .catch(function (error) {
      dispatch(actionCreator(AdminActionTypes.update_Propsed_Carers.FAILURE, error));
      callback(null, error)
      showErrorMessage(ERROR_MESSAGE_ON_FAILURE);
    });
  };
};


export const postTraining = (request, callback ) => {
  return (dispatch, getState) => {
    dispatch(actionCreator(AdminActionTypes.get_Post_Training.REQUEST));
    fetch(`${API_POST_TRAINING}`, {
      method: 'POST',
      body: JSON.stringify(request, null, 2),
      headers: jsonApiHeader('application/json'),
    })
    .then(checkHttpStatus)
    .then(function (response) {
      dispatch(actionCreator(AdminActionTypes.get_Post_Training.SUCCESS, response));
      callback(response)
    })
    .catch(function (error) {
      dispatch(actionCreator(AdminActionTypes.get_Post_Training.FAILURE, error));
      callback(null, error)
      showErrorMessage(ERROR_MESSAGE_ON_FAILURE);
    });
  };
};

export const userTracking = (formData) => {
  return (dispatch, getState) => {
    dispatch(actionCreator(AdminActionTypes.user_Tracking.REQUEST));
    fetch(`${API_TRACKING}`, {
      method: 'post',
      body: JSON.stringify(formData, null, 2),
      headers: jsonApiHeader('application/json'),
    })
    .then(checkHttpStatus)
    .then(function (response) {
      dispatch(actionCreator(AdminActionTypes.user_Tracking.SUCCESS, response));
    })
    .catch(function (error) {
      dispatch(actionCreator(AdminActionTypes.user_Tracking.FAILURE, error));
      console.log(error);
    });
  };
};
