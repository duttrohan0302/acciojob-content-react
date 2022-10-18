import {ADD_ITEM, CLEAR_LIST, REMOVE_ITEM} from "./action-types"

export const shoppingListReducer = (state, action) =>{
    switch(action.type){
        case ADD_ITEM:
            return [...state,{
                id: state.length,
                name: action.payload.name
            }]
        case REMOVE_ITEM:
            return state.filter((item,index)=>index!==action.payload.index)
        case CLEAR_LIST:
            return []
        default:
            return state;
    }
}

export const shoppingListItemsInitialState = [
    {
        id: 0,
        name: "Dummy Item 1"
    },
    {
        id: 1,
        name: "Dummy Item 2"
    }
]

