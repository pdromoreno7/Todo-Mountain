import styled from "styled-components";

const TodoListStyles = styled.section`
  padding: 7px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 67vh;
  .todoList__box {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 25px 0;
    overflow: hidden;
    transition: 1s;
  }
`;

export function TodoList(props) {
  //Asi si la props es un children igualmente funcionara:
  // const renderFunc = props.children || props.render;

  return (
    <TodoListStyles className="mobile-container transicion-one">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {!props.loading && !props.totalTodos && props.onEmptyTodos()}
      {!!props.totalTodos &&
        !props.searchedTodos.length &&
        props.onEmptySearchResults(props.searchText)}

      <ul className="todoList__box">{props.searchedTodos.map(props.render)}</ul>
    </TodoListStyles>
  );
}
