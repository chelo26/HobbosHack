import { carerOnBoardingActionTypes } from './../constants';

const initialState = {
  loading: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case carerOnBoardingActionTypes.save_carer_info.REQUEST:
    return {
      ...state,
      loading: true,
    };
  case carerOnBoardingActionTypes.save_carer_info.SUCCESS:
    return {
      ...state,
      loading: false,
    };
  case carerOnBoardingActionTypes.post_payer_info.FAILURE:
    return {
      ...state,
      loading: false,
    };

  default:
    return state;
  }
};
