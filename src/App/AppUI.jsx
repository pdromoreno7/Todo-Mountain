import { CreateTodoButton } from "../components/CreateTodoButton";
import { Header } from "../components/Header";
import { TodoCounter } from "../components/TodoCounter";
import { TodoItem } from "../components/TodoItem";
import { TodoList } from "../components/TodoList";
export function AppUI({
  loading,
  error,
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
        {error && <p>Hubo u error</p>}
        {loading && <p>Estamos cargando...</p>}
        {!loading && !searchedTodos.length && <p>Crea tu primer todo!</p>}

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
