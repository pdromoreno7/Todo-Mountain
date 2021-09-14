import styled from "styled-components";
import { BsCheck } from "react-icons/bs";
import { GrClose } from "react-icons/gr";

const TodoItemStyles = styled.li`
  display: flex;
  align-items: center;
  gap: 2rem;
  /* justify-content: space-between; */
  width: 90%;
  height: 50px;
  /* border-bottom: 1px solid #ccc; */
  background: var(--white);
  padding: 0 30px;
  margin: 8px 0;
  border-radius: 7px;
  transition: 1s;
  /* cursor: pointer; */
  :hover {
    box-shadow: 1px 14px 25px 0px #b3b3b3;
    transform: translateY(-0.2rem);
  }
  .todoItem__box {
    width: 100%;
    display: flex;
    align-items: center;
  }
  .todoItem__box-completed {
    text-decoration: line-through;
  }
  p {
    color: var(--font-color-1);
    cursor: pointer;
  }
  .todoItem__check-active {
    path {
      color: #05c005;
    }
  }
  .todoItem__delate {
    justify-self: flex-end;
    cursor: pointer;
    :hover {
      path {
        stroke: red;
      }
    }
  }
`;

export function TodoItem({ text, completed }) {
  const onComplete = () => {
    alert("Ya completaste el todo " + text);
  };
  const onDelate = () => {
    alert("Borraste el todo " + text);
  };

  return (
    <TodoItemStyles>
      <span
        className={`todoItem__check ${completed && "todoItem__check-active"}`}
        onClick={onComplete}
      >
        <BsCheck />
      </span>
      <div
        className={`todoItem__box ${completed && "todoItem__box-completed"}`}
      >
        <p>{text}</p>
      </div>
      <span className="todoItem__delate" onClick={onDelate}>
        <GrClose />
      </span>
    </TodoItemStyles>
  );
}
