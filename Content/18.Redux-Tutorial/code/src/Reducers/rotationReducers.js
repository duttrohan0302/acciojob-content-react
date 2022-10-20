import { initialRotationState } from "./index";
import { ROTATE } from "../Actions/types";

export default (state = initialRotationState, action) => {
    console.log(action)
    switch(action.type){
        case ROTATE:
            return {
                ...state,
                rotating: action.payload.rotate
            }
        default:
            return state;
    }
}