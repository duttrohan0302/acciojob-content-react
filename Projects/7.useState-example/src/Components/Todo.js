const Todo = ({todo, deleteTodo, setEditTodo}) => {
    return(
        <li>
          {todo.task} <button onClick={()=> setEditTodo(currentEditTodo=>({...currentEditTodo, id: todo.id, task: todo.task}))}>Edit Todo</button>
          <button onClick={() => deleteTodo(todo.id)}>Delete Todo</button>
        </li>
    )
}

export default Todo;