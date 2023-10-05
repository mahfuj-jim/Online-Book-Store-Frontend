import { combineReducers } from "redux";
import userReducers from "./user_reducer";

const reducer = combineReducers({
  user: userReducers,
});

export default reducer;
