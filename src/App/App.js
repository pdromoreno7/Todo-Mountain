// import { CreateTodoButton } from "./components/CreateTodoButton";
import { useState } from "react";
import { AppUI } from "./AppUI";

// Se creo este arreglo para mandar informacion de los todos:
// const defaultTodos = [
//   { text: "Platzi", completed: true },
//   { text: "Lavar lo platos", completed: true },
//   { text: "Church Proyect", completed: false },
//   { text: "Running", completed: false },
//   { text: "Leer Clean JavaScript", completed: false },
// ];

function useLocalStorage(itemName, initialValue) {
  // ==================== Manejo de local Storage ==========================================

  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = useState(parsedItem);

  // ================== Funcion para persistencia de datos ==================================

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };

  return [item, saveItem];
}

function App() {
  // ================== State ==========================================
  const [todos, saveTodos] = useLocalStorage("TODOS_V1", []);

  const [searchValue, setSearchValue] = useState("");

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

  // ============================ Check y dalate de todos =======================================

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
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      toggleCompleteTodo={toggleCompleteTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
