import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([{ id: 1, text: "Exam 2", done: false }]);
  const [draft, setDraft] = useState("");

  function addTodo(e) {
    e.preventDefault();

    const trimmed = draft.trim();
    if (!trimmed) return;

    setTodos([
      ...todos,
      { id: Date.now(), text: trimmed, done: false },
    ]);
    setDraft("");
  }

  function toggleDone(id) {
    setTodos(todos.map(t => t.id === id ? { ...t, done: !t.done } : t));
  }

  function removeTodo(id) {
    setTodos(todos.filter(t => t.id !== id));
  }

  return (
    <main className="app">
      <h1>ToDo</h1>

      <form className="input-row" onSubmit={addTodo}>
        <input
          value={draft}
          onChange={e => setDraft(e.target.value)}
          placeholder="Ny uppgift..."
        />
        <button type="submit">Lägg till</button>
      </form>

      <ul className="todo-list">
        {todos.map(t => (
          <li className={t.done ? "todo completed" : "todo"} key={t.id}>
            <input type="checkbox" checked={t.done} onChange={() => toggleDone(t.id)} />
            <p className="todo-text">{t.text}</p>
            <button className="todo-remove" type="button" onClick={() => removeTodo(t.id)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
