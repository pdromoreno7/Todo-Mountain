import styled from "styled-components";

const TodoItemStyles = styled.li`
  display: flex;
  align-items: center;
  width: 90%;
  height: 50px;
  /* border-bottom: 1px solid #ccc; */
  background: var(--white);
  padding: 0 30px;
  margin: 15px 0;
  border-radius: 7px;
  transition: 1s;
  cursor: pointer;
  :hover {
    box-shadow: 1px 14px 25px 0px #b3b3b3;
    transform: translateY(-0.2rem);
    transition: 1s;
  }

  p {
    color: var(--font-color-1);
  }
`;

export function TodoItem({ text }) {
  return (
    <TodoItemStyles>
      {/* <span>C</span> */}
      <p>{text}</p>
      {/* <span>x</span> */}
    </TodoItemStyles>
  );
}
