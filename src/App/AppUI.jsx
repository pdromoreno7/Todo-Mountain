import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { Header } from "../components/Header";
import { TodoCounter } from "../components/TodoCounter";
import { TodoItem } from "../components/TodoItem";
import { TodoList } from "../components/TodoList";
import { Modal } from "../components/Modal";
import { TodoForm } from "../components/TodoForm";
import { Spinner } from "../components/Spinner";
import { Footer } from "../components/Footer";
import { TodoSearch } from "../components/TodoSearch";
export function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    toggleCompleteTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    searchValue,
    setSearchValue,
  } = React.useContext(TodoContext);

  return (
    <>
      <Header>
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </Header>

      <TodoCounter />

      <TodoList>
        {error && <p>Hubo un error</p>}
        {loading && <Spinner />}
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

      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} openModal={openModal} />
      <Footer />
    </>
  );
}
