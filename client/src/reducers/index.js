import allergens from "./allergens";
import diagnoses from "./diagnoses";
import illnesses from "./illnesses";
import users from "./users";
import symptoms from "./symptoms";
import medicines from "./medicines";
import patients from "./patients";
import patient_files from "./patient_files";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  allergens,
  diagnoses,
  users,
  illnesses,
  symptoms,
  medicines,
  patients,
  patient_files
});

export default rootReducer;
