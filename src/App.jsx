import { useState } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all"); // all, done, undone.

  function addTodo(text) {
    const trimmed = text.trim();
    if (!trimmed) {
      return false;
    }

    setTodos([
      ...todos,
      { id: Date.now(), text: trimmed, done: false },
    ]);

    return true;
  }

  function filterTodos() {
    if (filter === "all") {
      return todos;
    }

    const filtered = todos.filter(todo => {
      if (filter === "done") {
        return todo.done;
      } else if (filter === "undone") {
        return !todo.done;
      } else {
        return true;
      }
    });

    return filtered;
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

      <fieldset className="todo-filter">
        <legend className="filter-legend">Visa uppgifter</legend>
        <div className="filter-options">
          {[
            { filter: "all", label: "Alla" },
            { filter: "done", label: "Klara" },
            { filter: "undone", label: "Inte klara" },
          ].map(option => (
            <label>
              <input
                type="radio"
                name="filter"
                onChange={() => setFilter(option.filter)}
                checked={filter === option.filter}
              />
              {option.label}
            </label>
          ))}
        </div>
      </fieldset>

      <ul className="todo-list">
        {filterTodos().map(todo => (
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
