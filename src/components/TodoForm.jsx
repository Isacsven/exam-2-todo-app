import { useState } from "react";

function TodoForm(props) {
  const { onAdd } = props;
  const [draft, setDraft] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onAdd(draft);
    setDraft("");
  }

  return (
    <form className="input-row" onSubmit={handleSubmit}>
      <input
        value={draft}
        onChange={event => setDraft(event.target.value)}
        placeholder="Ny uppgift..."
      />
      <button type="submit">Lägg till</button>
    </form>
  );
}

export default TodoForm;