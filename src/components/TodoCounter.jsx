import styled from "styled-components";

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

export function TodoCounter({ total, completed }) {
  return (
    <CounterStyles>
      <div className="bd-container counter__container">
        <p>
          Has completado{" "}
          <strong className="counter__complete">{completed}</strong> de{" "}
          <strong>{total}</strong> Todos
        </p>
      </div>
    </CounterStyles>
  );
}
