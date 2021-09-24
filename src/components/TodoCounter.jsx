import React from "react";
import styled from "styled-components";

const CounterStyles = styled.section`
  margin-top: 40px;
  transition: 1s;
  .counter__container {
    text-align: center;

    p {
      font-size: var(--h3-font-size);
      color: var(--font-color-1);
    }
  }
  /* .TodoCounter-loading {
    opacity: 25%;
  } */
`;

export function TodoCounter({ totalTodos, completedTodos, loading }) {
  return (
    <CounterStyles className={`${!!loading && "TodoCounter-loading"}`}>
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
