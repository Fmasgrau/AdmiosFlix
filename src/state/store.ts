import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import rootReducer from "./combineReducers";

const store = createStore(
  rootReducer,
  /* preloadedState, */ devToolsEnhancer({})
);

export default store;
