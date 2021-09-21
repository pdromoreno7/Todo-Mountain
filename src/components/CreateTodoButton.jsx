import { GrAdd } from "react-icons/gr";
import styled from "styled-components";

const ButtonAddTodo = styled.button`
  background-color: var(--secun-color);
  box-shadow: 0px 5px 25px rgba(97, 218, 250, 0.5);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 30px;
  position: fixed;
  bottom: 60px;
  right: 24px;
  font-weight: bold;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 54px;
  width: 54px;

  path {
    stroke: white;
  }
  transform: rotate(0);
  transition: 0.3s ease;
  :hover {
    transform: rotate(224deg);
  }
`;
export function CreateTodoButton(props) {
  const onClickButton = () => {
    props.setOpenModal(!props.openModal);
  };

  return (
    <ButtonAddTodo onClick={onClickButton}>
      <GrAdd />
    </ButtonAddTodo>
  );
}
