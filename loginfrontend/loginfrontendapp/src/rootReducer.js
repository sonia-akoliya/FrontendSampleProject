import { combineReducers } from "redux";
import * as login from "./Login";

export default combineReducers({
  [login.name]: login.reducer,
});
