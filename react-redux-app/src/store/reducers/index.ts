import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer.ts";

export const rootReducer = combineReducers({
  counter: counterReducer,
});
