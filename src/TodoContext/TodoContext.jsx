import React, { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const TodoContext = React.createContext();

export function TodoProvider({ children }) {
  // ================== State ==========================================
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = React.useState(false);

  // ================== Contar todos ==================================

  // La siguiente linea filtra los todos completados osea los que viene con un true
  //Esto para mostraslo en todoCounter:

  const completedTodos = todos.filter((todo) => todo.completed === true).length;
  const totalTodos = todos.length;

  // ================== Filtrado de todos por search ==================================
  //Se evalua si en estado searchValue tenga un valor
  //tranformamos a minuscula:
  //Se llama el estado de SearchValue para pasarlo a minuscula:

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();

      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  // ============================ Check, save y dalate de todos =======================================

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
    });
    saveTodos(newTodos);
  };

  const toggleCompleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);

    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);

    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        addTodo,
        toggleCompleteTodo,
        deleteTodo,
        openModal,
        setOpenModal,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
