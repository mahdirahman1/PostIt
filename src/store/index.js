import { createStore, combineReducers } from "redux";
import fileReducer from "./fileReducer";
import modalReducer from "./modalReducer";

const reducers = combineReducers({
  fileReducer,
  modalReducer,
});

const store = createStore(reducers);

export default store;
