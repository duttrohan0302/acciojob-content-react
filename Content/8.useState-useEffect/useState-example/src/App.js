import "./App.css";
import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      task: "Todo 1",
    },
    {
      id: 2,
      task: "Todo 2",
    },
  ]);
  return (
    <div className="App">
      <input type="text" placeholder="Todo Task Name" />
      <button>Add Todo</button>
      <p></p>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.task} {' '}
          <button>Edit Todo</button>
          <button>Delete Todo</button>
        </li>
      ))}
    </div>
  );
};

export default App;
