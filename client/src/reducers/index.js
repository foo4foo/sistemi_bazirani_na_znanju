import users from "./users";
import illnesses from "./illnesses";
import symptoms from "./symptoms";
import allergens from "./allergens";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  allergens,
  users,
  illnesses,
  symptoms
});

export default rootReducer;
