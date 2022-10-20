import { ROTATE } from "./types"

export const startRotationAction = {
    type: ROTATE,
    payload: {
        rotate: true
    }
}

export const stopRotationAction = {
    type: ROTATE,
    payload: {
        rotate: false
    }
}

export const rotateActionCreator = (customRotate = true) => {
    return {
        type: ROTATE,
        payload: {
            rotate: customRotate
        }
    }
}