import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([{ id: 1, text: "Exam 2" }]);
  const [draft, setDraft] = useState("");

  function addTodo(e) {
    e.preventDefault();

    const trimmed = draft.trim();
    if (!trimmed) return;

    setTodos([
      ...todos,
      { id: Date.now(), text: trimmed },
    ]);
    setDraft("");
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
            {t.text}
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
