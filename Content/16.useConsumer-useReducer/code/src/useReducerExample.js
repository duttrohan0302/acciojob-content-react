import React, {useRef, useReducer} from "react";
import { ADD_ITEM, REMOVE_ITEM, CLEAR_LIST} from "./action-types";
import { shoppingListItemsInitialState, shoppingListReducer } from "./reducer-data";

const ShoppingListUsingReducer = () =>{
    const inputRef = useRef();

    const [items, dispatch] = useReducer(shoppingListReducer, shoppingListItemsInitialState)

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            payload:{
                name: inputRef.current.value
            },
            type: ADD_ITEM
        })
    }
    const removeItem = (itemIndex) => {
        dispatch({
            payload:{
                index: itemIndex
            },
            type: REMOVE_ITEM
        })
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" ref={inputRef} />
        </form>
        {
            items.map((item,index)=>(
                <li key={item.id}>
                    {item.name}
                    <button onClick={()=>removeItem(index)} >Remove</button>
                </li>
            ))
        }
        <button onClick={()=>dispatch({type: CLEAR_LIST})}>Clear List</button>
        </>
    )
}

export default ShoppingListUsingReducer;