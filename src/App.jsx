import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([{ id: 1, text: "Exam 2" }]);
  const [draft, setDraft] = useState("");

  return (
    <main>
      <h1>ToDo</h1>

      <form>
        <input value={draft} onChange={e => setDraft(e.target.value)} placeholder="Ny uppgift..." />
        <button type="submit">Lägg till</button>
      </form>

      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            {t.text}
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
