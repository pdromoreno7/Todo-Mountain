import React from "react";
import styled from "styled-components";
import { TodoContext } from "../TodoContext/TodoContext";

const CounterStyles = styled.section`
  margin-top: 40px;
  .counter__container {
    text-align: center;

    p {
      font-size: var(--h3-font-size);
      color: var(--font-color-1);
    }
  }
`;

export function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);
  return (
    <CounterStyles>
      <div className="bd-container counter__container">
        <p>
          Has completado{" "}
          <strong className="counter__complete">{completedTodos}</strong> de{" "}
          <strong>{totalTodos}</strong> Todos
        </p>
      </div>
    </CounterStyles>
  );
}
