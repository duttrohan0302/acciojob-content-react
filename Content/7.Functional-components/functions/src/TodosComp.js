import React from "react";

const TodosComp = ({todos}) => {
    return(
        <div>
            {
                todos.map((todo, index)=>(
                    <li key={index}>({todo.id}){todo.task}</li>
                ))
            }
        </div>
    )
}

export default TodosComp;