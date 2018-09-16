import users from "./users";
import illnesses from "./illnesses";
import symptoms from "./symptoms";
import allergens from "./allergens";
import medicines from "./medicines";
import patient_files from "./patient_files";
import diagnoses from "./diagnoses";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  allergens,
  diagnoses,
  users,
  illnesses,
  symptoms,
  medicines,
  patient_files
});

export default rootReducer;
