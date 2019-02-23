import {
  edyncareFetch,
  API_URL,
  actionCreator,
  jsonApiHeader,
  checkHttpStatus,
  showSuccessMessage,
  showErrorMessage,
  createRequestActionTypes,
} from './../../../utils/utilActions';

export {
  edyncareFetch,
  API_URL,
  actionCreator,
  jsonApiHeader,
  checkHttpStatus,
  showSuccessMessage,
  showErrorMessage,
};

export const ERROR_MESSAGE_ON_FAILURE = 'Something went wrong! Please contact to admin.';

export const API_GET_CARER = `${API_URL}/carer`;
export const API_GET_USER = `${API_URL}/admin`;
export const API_SAVE_CARER = `${API_URL}/carer/update`;
export const API_SAVE_CLIENT = `${API_URL}/client/update`;
export const API_GET_CLIENT = `${API_URL}/client`;
export const API_CARE_PLAN = `${API_URL}/careplan`;
export const API_CARE_PLAN_NEW = `${API_URL}/careplan-new`;
export const API_CARE_PLAN_UPDATE = `${API_URL}/careplan-update`;
export const API_CARE_PLAN_CREATE_VISITS = `${API_URL}/careplan-create-visits`;

export const API_CARE_PLAN_BY_ID = `${API_URL}/careplanById`;
export const API_GET_VISITS = `${API_URL}/visit`;
export const API_GET_SCHEDULE = `${API_URL}/carer/schedule`;
export const API_GET_SCHEDULE_UPDATE = `${API_URL}/carer/schedule-update`;

export const API_CALENDER = `${API_URL}/calender`;

export const API_NOTES_CREATE = `${API_URL}/comments/create/notes`;
export const API_NOTES_GET = `${API_URL}/comments/get/notes`;
export const API_NOTES_ADD_COMMENT = `${API_URL}/comments/update/notes`;

export const API_FEEDBACK_CREATE = `${API_URL}/comments/create/feedback`;
export const API_FEEDBACK_GET = `${API_URL}/comments/get/feedback`;
export const API_FEEDBACK_ADD_COMMENT = `${API_URL}/comments/update/feedback`;

export const API_GENERATE_PAYSLIP_INVOICE = `${API_URL}/payment/generate-invoice-payslip`;
export const API_GET_ALL_PAYSLIPS = `${API_URL}/payment/payslips`;
export const API_GET_ALL_INVOICES = `${API_URL}/payment/invoices`;
export const API_GET_PAYSLIP_BY_ID = `${API_URL}/payment/payslip`;
export const API_GET_INVOICE_BY_ID = `${API_URL}/payment/invoice`;

export const API_GET_CARER_LIST = `${API_URL}/carer-list`;
export const API_CARE_TEAM_REQUEST = `${API_URL}/care-request`;
export const API_CARE_TEAM_REMOVE = `${API_URL}/care-team-remove`;

export const API_ASSIGN_CARER_SINGLE = `${API_URL}/visit/assign-carer-one`;
export const API_ASSIGN_CARER_ALL = `${API_URL}/visit/assign-carer`;

export const API_DELETE_NOTE = `${API_URL}/notes/delete`;
export const API_DELETE_COMMENT = `${API_URL}/notes/delete-comment`;

export const API_DELETE_VISIT = `${API_URL}/visit/delete`;
export const API_DELETE_VISITS_CAREPLAN = `${API_URL}/visit/delete-careplan-visits`;
export const API_CREATE_VISIT = `${API_URL}/visit/create`;

export const API_UNASSIGN_CARER_SINGLE = `${API_URL}/visit/unassign-carer-one`;

export const API_CHAT_USER_SUBMITTED = `${API_URL}/chat/users`;
export const API_CHAT_AUTHENTICATE = `${API_URL}/chat/authenticate`;
export const API_CHAT_USER_ROOMS = `${API_URL}/chat/user/rooms`;

export const API_NOTIFICATIONS_GET = `${API_URL}/notifications/get`;
export const API_NOTIFICATIONS_UPDATE = `${API_URL}/notifications/update`;

export const API_PROCESS_INVOICE_BY_ID = `${API_URL}/payment/process`;
export const API_PROPOSED_CARERS = `${API_URL}/proposed-carers`;

export const API_POST_TRAINING = `${API_URL}/post-training`;
export const API_TRACKING = `${API_URL}/tracking`;

export const AdminActionTypes = {
  get_Carer: createRequestActionTypes('GET_CARER'),
  get_CarerProfile: createRequestActionTypes('GET_CARER_PROFILE'),
  get_User: createRequestActionTypes('GET_USER'),
  save_Carer: createRequestActionTypes('SAVE_CARER'),
  save_Client: createRequestActionTypes('SAVE_CLIENT'),
  get_Client: createRequestActionTypes('GET_CLIENT'),
  save_Care_plan: createRequestActionTypes('SAVE_CARE_PLAN'),
  new_Care_plan: createRequestActionTypes('NEW_CARE_PLAN'),
  get_Visits: createRequestActionTypes('GET_VISITS'),
  get_Care_plan_list: createRequestActionTypes('GET_CARE_PLAN_LIST'),
  get_Care_plan: createRequestActionTypes('GET_CARE_PLAN'),
  get_Care_plan_by_id: createRequestActionTypes('GET_CARE_PLAN_BY_ID'),
  get_Schedule: createRequestActionTypes('GET_SCHEDULE'),
  update_Schedule: createRequestActionTypes('UPDATE_SCHEDULE'),
  generate_payslip_invoice: createRequestActionTypes('GENERATE_PAYSLIP_INVOICE'),
  get_all_payslips: createRequestActionTypes('GET_ALL_PAYSLIPS'),
  get_all_invoices: createRequestActionTypes('GET_ALL_INVOICES'),
  get_payslip_by_id: createRequestActionTypes('GET_PAYSLIP_BY_ID'),
  get_invoice_by_id: createRequestActionTypes('GET_INVOICE_BY_ID'),
  process_Invoice_By_Id: createRequestActionTypes('PROCESS_INVOICE_BY_ID'),
  get_Calendler_Visits_1M: createRequestActionTypes('GET_CALENDER_VISITS_1M'),
  get_Calendler_Visits_1D: createRequestActionTypes('GET_CALENDER_VISITS_1D'),
  get_Calendler_Visits_1W_User: createRequestActionTypes('GET_CALENDER_VISITS_1W_User'),
  get_Calendler_Visits_1W_Carer: createRequestActionTypes('GET_CALENDER_VISITS_1W_CARER'),
  create_note: createRequestActionTypes('CREATE_NOTE'),
  get_notes: createRequestActionTypes('GET_NOTES'),
  add_comment: createRequestActionTypes('ADD_COMMENT'),
  create_Feedback: createRequestActionTypes('CREATE_FEEDBACK_NOTE'),
  get_Feedback: createRequestActionTypes('GET_FEEDBACK_NOTES'),
  add_Feedback_Comment: createRequestActionTypes('ADD_FEEDBACK_COMMENT'),
  get_carer_list: createRequestActionTypes('GET_CARER_LIST'),
  get_Care_Team: createRequestActionTypes('GET_CARE_TEAM'),
  add_to_care_team: createRequestActionTypes('CARE_TEAM_REQUEST'),
  remove_from_Care_Team: createRequestActionTypes('CARE_TEAM_REMOVE'),
  assign_Carer_Single: createRequestActionTypes('ASSIGN_CARER_SINGLE'),
  assign_Carer_All: createRequestActionTypes('ASSIGN_CARER_ALL'),
  delete_note: createRequestActionTypes('DELETE_NOTE'),
  delete_comment: createRequestActionTypes('DELETE_COMMENT'),
  delete_visit: createRequestActionTypes('DELETE_VISIT'),
  delete_visits_careplan: createRequestActionTypes('DELETE_VISITS_CAREPLAN'),
  create_Visit: createRequestActionTypes('CREATE_VISIT'),
  unassign_carer_single: createRequestActionTypes('UNASSIGN_CARER_SINGLE'),
  chat_user: createRequestActionTypes('CHAT_USER'),
  get_Notifications: createRequestActionTypes('GET_NOTIFICATIONS'),
  update_Notifications: createRequestActionTypes('UPDATE_NOTIFICATIONS'),
  chat_user_rooms: createRequestActionTypes('CHAT_USER_ROOMS'),
  update_Propsed_Carers: createRequestActionTypes('PROPOSED_CARERS'),
  get_All_Carers_Prop: createRequestActionTypes('GET_ALL_CARERS_PROP'),
  get_Carers_Prop: createRequestActionTypes('GET_CARERS_PROP'),
  get_Post_Training: createRequestActionTypes('GET_POST_TRAINING'),
  user_Tracking: createRequestActionTypes('USER_TRACKING'),
};

export const MODULE = 'ADMIN';
