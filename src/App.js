import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo } from "./store";
import "./App.css";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (newTodo.trim() === "") return;
    dispatch(addTodo(newTodo));
    setNewTodo("");
  };

  const handleToggleTodo = (index) => {
    dispatch(toggleTodo(index));
  };

  return (
    <div id="App">
      <h1>тудушки</h1>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
            onClick={() => handleToggleTodo(index)}
          >
            {todo.text}
          </li>
        ))}
      </ul>
      <div id="add-content">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Введите текст"
        />
        <button onClick={handleAddTodo}>Добавить</button>
      </div>
    </div>
  );
}

export default App;
