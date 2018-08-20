import users from "./users";
import illnesses from "./illnesses";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  users,
  illnesses
});

export default rootReducer;
