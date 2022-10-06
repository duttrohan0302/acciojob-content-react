const TodoInput = ({todoText, setTodoText, addTodo}) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Todo Task Name"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
};

export default TodoInput;
