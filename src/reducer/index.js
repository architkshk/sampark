import {combineReducers} from "redux";
import users from './userReducer';
import groups from './groupReducers'
export default combineReducers({
  users,
  groups,
});