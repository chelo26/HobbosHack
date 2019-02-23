import { AdminActionTypes } from '../actions/constants';

const initialState = {
  loading: false,
  carer: {},
  carePlanDetails: { 
    data: {
      generalHealth: {}, 
      physicalCondition: {}, 
      communication: {}, 
      prevConditions: {}, 
      communication: {},
      medicalConditions: {},
      memoryCondition: {},
      mentalHealth: {},
      careServices: {},
      hra: {}
    }
  },
  user: [],
  client: {},
  adminMonth: [],
  adminDay: [],
  userWeek: [],
  notes: [],
  carePlanData: {},
  carePlanList: [],
  carersList: [],
  carerProfile: {},
  visits: [],
  notications: [],
  careTeam: {team: {}},
  allCarersProp: { data: [] },
  carersProp: { data: [] },
  docList: { data: [] },
  feedbacks: { data: [] },
  userTrack: { data: [] }
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case AdminActionTypes.get_Carer.REQUEST:
    case AdminActionTypes.get_CarerProfile.REQUEST:
    case AdminActionTypes.save_Carer.REQUEST:
    case AdminActionTypes.save_Client.REQUEST:
    case AdminActionTypes.get_User.REQUEST:
    case AdminActionTypes.get_Client.REQUEST:
    case AdminActionTypes.save_Care_plan.REQUEST:
    case AdminActionTypes.get_Visits.REQUEST:
    case AdminActionTypes.get_Care_plan.REQUEST:
    case AdminActionTypes.get_Care_plan_list.REQUEST:
    case AdminActionTypes.get_Care_plan_by_id.REQUEST:
    case AdminActionTypes.get_Schedule.REQUEST:
    case AdminActionTypes.generate_payslip_invoice.REQUEST:
    case AdminActionTypes.get_all_payslips.REQUEST:
    case AdminActionTypes.get_all_invoices.REQUEST:
    case AdminActionTypes.get_payslip_by_id.REQUEST:
    case AdminActionTypes.get_invoice_by_id.REQUEST:
    case AdminActionTypes.get_Calendler_Visits_1M.REQUEST:
    case AdminActionTypes.get_Calendler_Visits_1D.REQUEST:
    case AdminActionTypes.get_Calendler_Visits_1W_User.REQUEST:
    case AdminActionTypes.get_Calendler_Visits_1W_Carer.REQUEST:
    case AdminActionTypes.get_notes.REQUEST:
    case AdminActionTypes.get_Feedback.REQUEST:
    case AdminActionTypes.add_comment.REQUEST:
    case AdminActionTypes.get_carer_list.REQUEST:
    case AdminActionTypes.get_Care_Team.REQUEST:
    case AdminActionTypes.add_to_care_team.REQUEST:
    case AdminActionTypes.assign_Carer_Single.REQUEST:
    case AdminActionTypes.assign_Carer_All.REQUEST:
    case AdminActionTypes.delete_note.REQUEST:
    case AdminActionTypes.delete_comment.REQUEST:
    case AdminActionTypes.delete_visit.REQUEST:
    case AdminActionTypes.delete_visits_careplan.REQUEST:
    case AdminActionTypes.create_Visit.REQUEST:
    case AdminActionTypes.unassign_carer_single.REQUEST:
    case AdminActionTypes.chat_user.REQUEST:
    case AdminActionTypes.get_Notifications.REQUEST:
    case AdminActionTypes.update_Notifications.REQUEST:
    case AdminActionTypes.chat_user_rooms.REQUEST:
    case AdminActionTypes.update_Propsed_Carers.REQUEST:
    case AdminActionTypes.get_All_Carers_Prop.REQUEST:
    case AdminActionTypes.get_Carers_Prop.REQUEST:
    case AdminActionTypes.get_Post_Training.REQUEST:
    case AdminActionTypes.user_Tracking.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case AdminActionTypes.get_Carer.SUCCESS: 
      return {
        ...state,
        loading: false,
        carer: payload,
      };
    case AdminActionTypes.get_CarerProfile.SUCCESS:
      return {
        ...state,
        loading: false,
        carerProfile: payload,
      };
    case AdminActionTypes.get_User.SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload,
      };
    case AdminActionTypes.save_Carer.SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case AdminActionTypes.save_Client.SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case AdminActionTypes.get_Client.SUCCESS: 
      return {
        ...state,
        loading: false,
        client: payload
      };
    case AdminActionTypes.save_Care_plan.SUCCESS:
      return {
        ...state,
        loading: false,
        carePlanRes: payload,
      };
    case AdminActionTypes.get_Visits.SUCCESS: 
      return {
        ...state,
        loading: false,
        visits: payload,
      };
    case AdminActionTypes.get_Care_plan_list.SUCCESS: 
      return {
        ...state,
        loading: false,
        carePlanList: payload,
      };
    case AdminActionTypes.get_Care_plan.SUCCESS:
      return {
        ...state,
        loading: false,
        carePlanData: payload,
      };
    case AdminActionTypes.get_Care_plan_by_id.SUCCESS: 
      return {
        ...state,
        loading: false,
        carePlanDetails: payload,
      };
    case AdminActionTypes.get_Schedule.SUCCESS:
      return {
        ...state,
        loading: false,
        carerSchedule: payload,
      };
    case AdminActionTypes.generate_payslip_invoice.SUCCESS:
      return {
        ...state,
        loading: false,
        generatedStatus: payload,
      };
    case AdminActionTypes.get_all_payslips.SUCCESS:
      return {
        ...state,
        loading: false,
        payslips: payload,
      };
    case AdminActionTypes.get_all_invoices.SUCCESS:
      return {
        ...state,
        loading: false,
        invoices: payload,
      };
    case AdminActionTypes.get_payslip_by_id.SUCCESS:
      return {
        ...state,
        loading: false,
        payslip: payload,
      };
    case AdminActionTypes.get_invoice_by_id.SUCCESS:
      return {
        ...state,
        loading: false,
        invoice: payload,
      };
    case AdminActionTypes.get_Calendler_Visits_1M.SUCCESS:
      return {
        ...state,
        loading: false,
        adminMonth: payload,
      };
    case AdminActionTypes.get_Calendler_Visits_1D.SUCCESS:
      return {
        ...state,
        loading: false,
        adminDay: payload,
      };
    case AdminActionTypes.get_Calendler_Visits_1W_User.SUCCESS:
      return {
        ...state,
        loading: false,
        userWeek: payload,
      };
    case AdminActionTypes.get_Calendler_Visits_1W_Carer.SUCCESS:
      return {
        ...state,
        loading: false,
        carerWeek: payload,
      };
    case AdminActionTypes.get_notes.SUCCESS:
      return {
        ...state,
        loading: false,
        notes: payload,
      };
    case AdminActionTypes.get_Feedback.SUCCESS:
      return {
        ...state,
        loading: false,
        feedbacks: payload,
      };
    case AdminActionTypes.add_comment.SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case AdminActionTypes.get_carer_list.SUCCESS: 
      return {
        ...state,
        loading: false,
        carersList: payload,
      };
    case AdminActionTypes.get_Care_Team.SUCCESS: 
      return {
        ...state,
        loading: false,
        careTeam: payload.data,
    };
    case AdminActionTypes.delete_visit.SUCCESS:
      return {
        ...state,
        loading: false,
        visitDelete: payload,
      };
    case AdminActionTypes.delete_visits_careplan.SUCCESS:
      return {
        ...state,
        loading: false,
        visitDeleteCarePlan: payload,
      };
    case AdminActionTypes.chat_user.SUCCESS:
      return {
        ...state,
        loading: false,
        chat: payload,
      };
    case AdminActionTypes.get_Notifications.SUCCESS:
      return {
        ...state,
        loading: false,
        notications: payload,
      };
    case AdminActionTypes.chat_user_rooms.SUCCESS:
      return {
        ...state,
        loading: false,
        userRooms: payload,
      };
    case AdminActionTypes.assign_Carer_Single.SUCCESS:
    return {
      ...state,
      loading: false,
      // visits: payload,
    };
    case AdminActionTypes.unassign_carer_single.SUCCESS: 
      return {
        ...state,
        loading: false,
        // visits: payload,
      };
    case AdminActionTypes.create_Visit.SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case AdminActionTypes.update_Propsed_Carers.SUCCESS:
      return {
        ...state,
        loading: false
      };
    case AdminActionTypes.get_All_Carers_Prop.SUCCESS:
      return {
        ...state,
        loading: false,
        allCarersProp: payload,
      };
    case AdminActionTypes.get_Carers_Prop.SUCCESS:
      return {
        ...state,
        loading: false,
        carersProp: payload,
      };
    case AdminActionTypes.get_Post_Training.SUCCESS:
      return {
        ...state,
        loading: false,
        docList: payload,
      };
    case AdminActionTypes.user_Tracking.SUCCESS:
      return {
        ...state,
        loading: false,
        userTrack: payload,
      };
    case AdminActionTypes.add_to_care_team.SUCCESS: 
    case AdminActionTypes.assign_Carer_All.SUCCESS:
    case AdminActionTypes.delete_note.SUCCESS:
    case AdminActionTypes.delete_comment.SUCCESS:
    case AdminActionTypes.update_Notifications.SUCCESS:
    case AdminActionTypes.get_Carer.FAILURE:
    case AdminActionTypes.get_CarerProfile.FAILURE:
    case AdminActionTypes.get_User.FAILURE:
    case AdminActionTypes.save_Carer.FAILURE:
    case AdminActionTypes.save_Client.FAILURE:
    case AdminActionTypes.get_Client.FAILURE:
    case AdminActionTypes.save_Care_plan.FAILURE:
    case AdminActionTypes.get_Visits.FAILURE:
    case AdminActionTypes.get_Care_plan.FAILURE:
    case AdminActionTypes.get_Care_plan_list.FAILURE:
    case AdminActionTypes.get_Care_plan_by_id.FAILURE:
    case AdminActionTypes.get_Schedule.FAILURE:
    case AdminActionTypes.generate_payslip_invoice.FAILURE:
    case AdminActionTypes.get_all_payslips.FAILURE:
    case AdminActionTypes.get_all_invoices.FAILURE:
    case AdminActionTypes.get_payslip_by_id.FAILURE:
    case AdminActionTypes.get_invoice_by_id.FAILURE:
    case AdminActionTypes.get_Calendler_Visits_1M.FAILURE:
    case AdminActionTypes.get_Calendler_Visits_1D.FAILURE:
    case AdminActionTypes.get_Calendler_Visits_1W_User.FAILURE:
    case AdminActionTypes.get_Calendler_Visits_1W_Carer.FAILURE:
    case AdminActionTypes.get_notes.FAILURE:
    case AdminActionTypes.get_Feedback.FAILURE:
    case AdminActionTypes.add_comment.FAILURE:
    case AdminActionTypes.get_carer_list.FAILURE:
    case AdminActionTypes.get_Care_Team.FAILURE:
    case AdminActionTypes.add_to_care_team.FAILURE:
    case AdminActionTypes.assign_Carer_Single.FAILURE:
    case AdminActionTypes.assign_Carer_All.FAILURE:
    case AdminActionTypes.delete_note.FAILURE:
    case AdminActionTypes.delete_comment.FAILURE:
    case AdminActionTypes.delete_visit.FAILURE:
    case AdminActionTypes.delete_visits_careplan.FAILURE:
    case AdminActionTypes.unassign_carer_single.FAILURE:
    case AdminActionTypes.chat_user.FAILURE:
    case AdminActionTypes.get_Notifications.FAILURE:
    case AdminActionTypes.update_Notifications.FAILURE:
    case AdminActionTypes.chat_user_rooms.FAILURE:
    case AdminActionTypes.create_Visit.FAILURE:
    case AdminActionTypes.update_Propsed_Carers.FAILURE:
    case AdminActionTypes.get_All_Carers_Prop.FAILURE:
    case AdminActionTypes.get_Carers_Prop.FAILURE:
    case AdminActionTypes.get_Post_Training.FAILURE:
    case AdminActionTypes.user_Tracking.FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
