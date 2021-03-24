import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'react-redux';
import authReducer from './authReducer';

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
});
