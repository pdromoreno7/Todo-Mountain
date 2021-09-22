import styled from "styled-components";

const TodoListStyles = styled.section`
  padding: 7px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .todoList__box {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 50px 0;
    overflow: hidden;
    transition: 1s;
  }
`;

export function TodoList(props) {
  return (
    <TodoListStyles className="bd-container">
      <ul className="todoList__box">{props.children}</ul>
    </TodoListStyles>
  );
}
