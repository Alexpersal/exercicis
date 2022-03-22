import { createStore, combineReducers } from "redux";
import { counterReducer } from "./reducers/counterReducer";

const appReducer = combineReducers({
  counterReducer: counterReducer,
});

export default createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
