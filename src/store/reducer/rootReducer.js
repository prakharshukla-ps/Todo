import { combineReducers } from "@reduxjs/toolkit";
import appReducer from "./appReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  appReducer,
  userReducer,
});
export default rootReducer;
