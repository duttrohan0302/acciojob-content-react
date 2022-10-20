import { DECREMENT, INCREMENT } from "./types"

export const incrementCounterAction = {
    type: INCREMENT,
    payload: {
        value: 1
    }
}

export const decrementCounterAction = {
    type: DECREMENT,
    payload: {
        value: 1
    }
}

export const counterActionCreator = (customType, customValue = 1) => {
    return {
        type: customType,
        payload: {
            value: customValue
        }
    }
}