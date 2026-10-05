import { useState } from "react";

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

  return (
    <main>
      <h1>ToDo</h1>

      <form onSubmit={addTodo}>
        <input value={draft} onChange={e => setDraft(e.target.value)} placeholder="Ny uppgift..." />
        <button type="submit">Lägg till</button>
      </form>

      <ul>
        {todos.map(t => (
          <li key={t.id}>
            <button type="button" onClick={() => toggleDone(t.id)}>
              {t.done ? "Avmarkera" : "Markera klar"}
            </button>
            {t.text}
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
