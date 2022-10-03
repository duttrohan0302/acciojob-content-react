import React, { useState } from "react";
import TodosComp from "./TodosComp"

const Example2 = () => {

    // just a constant array, not a state variable
    const validFruits = ["Apple", "Banana", "Guava", "Lichi"]

    // Declare a state variable which we'll call fruitStateVariable
    // const fruitStateVariable = useState("banana")
    // const fruit = fruitStateVariable[0];
    // const setFruit = fruitStateVariable[1]

    // to simplify the above, we can use array destructuring
    const [fruit, setFruit] = useState("Banana")
    const [inputValueFruit, setInputValueFruit] = useState("")
    const [disabled, setDisabled] = useState(false)


    const [age, setAge] = useState(22)
    const [todos, setTodos] = useState([
        {
            id: 1,
            task: "Todo 1"
        },
        {
            id: 2,
            task: "Todo 2"
        }
    ])

    const changeInput = (event) => {
        const newFruitName = event.target.value;
        if(validFruits.includes(newFruitName)){
            setDisabled(false)
        }else{
            setDisabled(true)
        }
        console.log(inputValueFruit,disabled)
        setInputValueFruit(newFruitName)
    }
    const changeFruit = () => {
        setFruit(inputValueFruit)
    }
    return(
        <div>
            <hr />
            The current fruit is {fruit}
            <br />
            <input type="text" value={inputValueFruit} onChange={changeInput}/>
            <button onClick={changeFruit} disabled={disabled}>Change Fruit</button>
            <hr />
            <TodosComp todos={todos} />
        </div>
    )
}

export default Example2;