import { combineReducers } from "redux";
import counterReducers from "./counterReducers";
import rotationReducers from "./rotationReducers";


export const initialRotationState = {
    rotating: true,
}

export const initialCounterState = {
    num: 5
}

const totalReducer = combineReducers({
    counter: counterReducers,
    rotation: rotationReducers
})

export default totalReducer;