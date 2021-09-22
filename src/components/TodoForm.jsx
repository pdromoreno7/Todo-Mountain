import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";

export function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState("");

  const { addTodo, setOpenModal } = React.useContext(TodoContext);

  const onCancel = () => {
    setOpenModal(false);
  };
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };
  return (
    <form onSubmit={onSubmit}>
      <label>...</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Escribe aqui tu tarea"
      />
      <div>
        <button type="buttom" onClick={onCancel}>
          Cancelar
        </button>
        <button type="submit">Añadir</button>
      </div>
    </form>
  );
}
