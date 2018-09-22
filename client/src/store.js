import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import rootReducer from "./reducers";
import loginSaga from "./sagas/user_sagas";
import searchIllnessesSaga from "./sagas/illness_sagas";
import searchSymptomsSaga from "./sagas/symptom_sagas";
import fetchAllergensSaga from "./sagas/allergen_saga";
import patientFilesSaga from "./sagas/patient_files_sagas";
import medicineSaga from "./sagas/medicine_saga";
import diagnosisSaga from "./sagas/diagnosis_saga";
import patientSaga from "./sagas/patient_saga";

const sagaMiddleware = createSagaMiddleware();

const initialState = {};
const enhancers = [];
const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
  middlewares.push(logger);
}

const composedEnhancers = compose(
  applyMiddleware(...middlewares),
  ...enhancers
);

export default createStore(rootReducer, initialState, composedEnhancers);

sagaMiddleware.run(loginSaga);
sagaMiddleware.run(searchIllnessesSaga);
sagaMiddleware.run(searchSymptomsSaga);
sagaMiddleware.run(fetchAllergensSaga);
sagaMiddleware.run(patientFilesSaga);
sagaMiddleware.run(medicineSaga);
sagaMiddleware.run(diagnosisSaga);
sagaMiddleware.run(patientSaga);
