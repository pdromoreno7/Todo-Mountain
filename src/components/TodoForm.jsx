import React from "react";
import styled from "styled-components";
import { TodoContext } from "../TodoContext/TodoContext";

const TodoFormStyles = styled.form`
  background-color: var(--main-color);
  padding: 70px 20px;
  border-radius: 10px;
  box-shadow: 1px 14px 25px 0px #3d3d3d;
  width: 80%;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 1s;
  .form__title {
    font-size: var(--h2-font-size);
    color: var(--font-color-1);
    font-weight: var(--medium-font);
  }
  textarea {
    font-family: "Poppins";
    width: 100%;
    height: 150px;
    font-size: 1rem;
    padding: 1.2rem;
    color: var(--font-color-1);
    /* background-color: var(--deep-dark); */
    outline: none;
    border: none;
    border-radius: 8px;
    /* margin-top: 1rem; */
    :focus {
      border: #a2a3a3 solid 1px;
    }
  }
  .form__butomBox {
    display: flex;
    gap: 1rem;
  }
  .form__butomBox-submit {
    font-family: "Poppins";
    padding: 10px 25px;
    outline: none;
    border: none;
    color: white;
    background-color: var(--secun-color);
    border-radius: 15px;
    cursor: pointer;
    :hover {
      background-color: var(--tercer-color);
      transition: 1s;
    }
  }
  .form__butomBox-cancel {
    font-family: "Poppins";
    padding: 10px 15px;
    outline: none;
    border: #a2a3a3 solid 1px;
    color: var(--font-color-1);
    background-color: white;
    border-radius: 15px;
    cursor: pointer;
    :hover {
      background-color: #d11a51d6;
      color: white;
      transition: 1s;
    }
  }
`;

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
    <TodoFormStyles onSubmit={onSubmit} className="mobile-container">
      <label className="form__title">Añadir un todo</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Escribe aqui tu tarea..."
      />
      <div className="form__butomBox">
        <button
          className="form__butomBox-cancel"
          type="buttom"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button className="form__butomBox-submit" type="submit">
          Añadir
        </button>
      </div>
    </TodoFormStyles>
  );
}
