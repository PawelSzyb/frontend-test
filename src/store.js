import { createStore, applyMiddleware } from "react-redux";
import thunk from "redux-thunk";

const initialState = {};
const middleware = [thunk];

const store = createStore(
  initialState,
  applyMiddleware(...middleware),
  rootReducer
);
export default store;
