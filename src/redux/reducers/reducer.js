import { combineReducers } from "redux";
import userReducers from "./user_reducer";

const reducers = combineReducers({
  user: userReducers,
});

export default reducers;
