// import { authReducer } from "./reducers/AuthReducer";
// import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from "redux-thunk";
// import { rootReducer } from "./reducers";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// export const store = createStore(rootReducer, applyMiddleware(thunk));













import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from "./reducers";


const middlewares = [thunkMiddleware]
const middlewareEnhancer = applyMiddleware(...middlewares)
const enhancers = [middlewareEnhancer]
const composedEnhancers = composeWithDevTools(...enhancers)
export const store = (previousState) => {
    const store = createStore(rootReducer, previousState, composedEnhancers);
    return store;
}



// export const store =createStore(authReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());