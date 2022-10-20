import { initialCounterState } from ".";
import { DECREMENT, INCREMENT } from "../Actions/types";

export default (state = initialCounterState, action) => {
    switch(action.type){
        case INCREMENT:
            return {
                ...state,
                num: state.num + action.payload.value
            }
        case DECREMENT:
            return {
                ...state,
                num: state.num - action.payload.value
            }
        default:
            return state;
    }
}