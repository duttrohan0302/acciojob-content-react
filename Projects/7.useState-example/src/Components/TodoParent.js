import { useState } from "react";
import { v4 as uuid } from "uuid";
import Todo from "./Todo";
import TodoInput from "./TodoInput";
import TodoEdit from "./TodoEdit";

const TodoParent = () => {
  const [todos, setTodos] = useState([
    {
      id: uuid(),
      task: "Todo 1",
    },
    {
      id: uuid(),
      task: "Todo 2",
    },
  ]);
  const [todoText, setTodoText] = useState("");
  const [editTodo, setEditTodo] = useState({
    id: null,
    task: ""
  })

  const saveEditedTodo = () => {
    if(!editTodo.id || editTodo.task===""){
        alert("No Todo to Edit")
        return;
    }
    setTodos(currentTodos=>currentTodos.map((todo)=>{
        if(todo.id===editTodo.id){
            todo.task = editTodo.task
        }
        return todo
    }))
    setEditTodo({
        id: null,
        task: ""
    })
  }
  const addTodo = () => {
    if (todoText !== "") {
      // Method No. 1 => Not really ideal
      // const newtodos = [...todos, {
      //   id: todos.length,
      //   task: todoText
      // }]
      // setTodos(newtodos)

      // Method No. 2 => Okayish but not the best
      // setTodos([...todos, {
      //   id: todos.length,
      //   task: todoText
      // }])

      //  Method No. 3 => Best way
      setTodos((currentTodos) => [
        ...currentTodos,
        {
          id: uuid(),
          task: todoText,
        },
      ]);
      setTodoText("");
    }else{
      alert("Todo task cannot be empty")
    }
  };
  const deleteTodo = (id) => {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="App">
      <h1>Todos</h1>
      <TodoInput todoText={todoText} setTodoText={setTodoText} addTodo={addTodo}/>
      <br />
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} deleteTodo={deleteTodo} setEditTodo={setEditTodo}/>
      ))}
      {
        editTodo.id ?
        <>
            <h3>Edit Area</h3>
            <TodoEdit editTodo={editTodo} setEditTodo={setEditTodo} saveEditedTodo={saveEditedTodo}/>
        </>
        :
        null
      }
      
    </div>
  );
};

export default TodoParent;
