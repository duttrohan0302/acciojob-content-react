import { createStore } from "redux";

import combinedReducer from "./Reducers/index"

const initialState = {
    counter: {
        num: 5
    },
    rotation: {
        rotating: true
    }
}

const configureStore = (state = initialState) =>{
    return createStore(combinedReducer,state)
}

export default configureStore;