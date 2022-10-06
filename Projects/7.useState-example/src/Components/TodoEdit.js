const TodoEdit = ({editTodo, setEditTodo, saveEditedTodo}) => {
    return (
      <div>
        <input
          type="text"
          placeholder="Todo Task Name"
          value={editTodo.task}
          onChange={(e) => setEditTodo(currentEditTodo=>({...currentEditTodo, task: e.target.value}))}
        />
        <button onClick={saveEditedTodo}>Save Todo</button>
      </div>
    );
  };
  
  export default TodoEdit;
  