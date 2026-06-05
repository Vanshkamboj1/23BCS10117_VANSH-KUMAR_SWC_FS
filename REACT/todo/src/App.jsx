import React, { useState } from "react";

function App() {
  const [currentInput, setCurrentInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (currentInput.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: currentInput,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setCurrentInput("");
  };

  const toggleTask = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h2>Task Manager</h2>

      <div>
        <input
          type="text"
          placeholder="Enter a task"
          value={currentInput}
          onChange={(e) => setCurrentInput(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "10px",
            }}
          >
            <span
              onClick={() => toggleTask(todo.id)}
              style={{
                cursor: "pointer",
                textDecoration: todo.completed
                  ? "line-through"
                  : "none",
              }}
            >
              {todo.text}
            </span>

            <button onClick={() => deleteTask(todo.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;