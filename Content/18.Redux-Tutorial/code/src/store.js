import { createStore, applyMiddleware, compose } from "redux";

import combinedReducer from "./Reducers/index"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
    counter: {
        num: 5
    },
    rotation: {
        rotating: true
    }
}

const configureStore = (state = initialState) =>{
    return createStore(combinedReducer,state, composeEnhancers(applyMiddleware()))
}

export default configureStore;