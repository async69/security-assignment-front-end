import { combineReducers } from "redux"
import { reducer as BufferReducer, stateName as buffer } from "./States/Buffer/index"

export default combineReducers({
  [buffer]: BufferReducer,
});