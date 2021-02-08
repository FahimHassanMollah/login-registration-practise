import { createStore } from "redux";
import { authReducer } from "./reducers/AuthReducer";

export const store =createStore(authReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());