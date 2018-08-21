import users from "./users";
import illnesses from "./illnesses";
import symptoms from "./symptoms";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  users,
  illnesses,
  symptoms
});

export default rootReducer;
