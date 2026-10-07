function TodoItem(props) {
  const { todo, onToggle, onRemove } = props;

  return (
    <li className={todo.done ? "todo completed" : "todo"}>
      <input type="checkbox" checked={todo.done} onChange={onToggle} />
      <p className="todo-text">{todo.text}</p>
      <button className="todo-remove" type="button" onClick={onRemove}>
        X
      </button>
    </li>
  );
}

export default TodoItem;