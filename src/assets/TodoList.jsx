import { useState } from "react";

export default function TodoList() {

  let [todos, setTodos] = useState([
    { id: 1, task: "Code" }
  ]);
  
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    if (newTodo.trim() === "") return;

    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Date.now(), task: newTodo }
    ]);

    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => todo.id !== id)
    );
  };

  return (
    <div>
      <input
        placeholder="Add a task"
        value={newTodo}
        onChange={updateTodoValue}
      />
      <button onClick={addNewTask}>Add Task</button>

      <hr />
      <h4>Todo List</h4>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.task}</span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
