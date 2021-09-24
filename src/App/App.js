// import { useEffect, useState } from "react";
import { useTodos } from "./useTodos";
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

function App() {
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
    addTodo,
    totalTodos,
    completedTodos,
  } = useTodos();

  return (
    <>
      <Header>
        <TodoSearch
          loading={loading}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </Header>

      <TodoCounter
        loading={loading}
        totalTodos={totalTodos}
        completedTodos={completedTodos}
      />

      <TodoList
        error={error}
        loading={loading}
        totalTodos={totalTodos}
        searchedTodos={searchedTodos}
        searchText={searchValue}
        onError={() => <p>Hubo un error</p>}
        onLoading={() => <Spinner />}
        onEmptyTodo={() => <p>Crea tu primer todo!</p>}
        onEmptySearchResults={(searchText) => (
          <p>No hay resultado para {searchText} </p>
        )}
        render={(todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => toggleCompleteTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      />

      {!!openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} openModal={openModal} />
      <Footer />
    </>
  );
}

export default App;
