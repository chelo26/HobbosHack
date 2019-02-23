/**
 * @desc Main reducer - that combines reducers of each module.
 */

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'; // SAYING use redux form reducers as reducers
import AdminReducer from '../modules/admin/reducers';


const rootReducer = (state, action) => {
  return appReducer(state, action);
};

const appReducer = combineReducers({
  form: formReducer,
  admin: AdminReducer,
});

export default rootReducer;
