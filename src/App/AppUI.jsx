import { CreateTodoButton } from "../components/CreateTodoButton";
import { Header } from "../components/Header";
import { TodoCounter } from "../components/TodoCounter";
import { TodoItem } from "../components/TodoItem";
import { TodoList } from "../components/TodoList";
export function AppUI({
  totalTodos,
  completedTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  toggleCompleteTodo,
  deleteTodo,
}) {
  return (
    <>
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoCounter total={totalTodos} completed={completedTodos} />

      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => toggleCompleteTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}
