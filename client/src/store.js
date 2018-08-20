import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import rootReducer from "./reducers";
import loginSaga from "./sagas/user_sagas";
import searchIllnessesSaga from "./sagas/illness_sagas";

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
