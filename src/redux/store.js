import { combineReducers, createStore, applyMiddleware } from "redux";
import orderReducer from "./orderReducer";
import userLoginReducer from "./userLoginReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  order: orderReducer,
  login: userLoginReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
