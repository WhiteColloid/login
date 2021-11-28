import { combineReducers } from "redux";
import { reducer as registerReducer } from "../pages/registor/store";
//combine all reducers

export default combineReducers({
  register: registerReducer,
});
