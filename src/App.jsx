import { useState } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(text) {
    const trimmed = text.trim();
    if (!trimmed) return;

    setTodos([
      ...todos,
      { id: Date.now(), text: trimmed, done: false },
    ]);
  }

  function toggleDone(id) {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, done: !todo.done } : todo));
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <main className="app">
      <h1>ToDo</h1>

      <TodoForm onAdd={addTodo} />

      <ul className="todo-list">
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={() => toggleDone(todo.id)}
            onRemove={() => removeTodo(todo.id)}
          />
        ))}
      </ul>
    </main>
  );
}

export default App;
