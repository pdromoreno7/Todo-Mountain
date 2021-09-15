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

function App() {
  // ==================== Manejo de local Storage ==========================================

  const localStorageTodos = localStorage.getItem("TODOS_V1");
  let parsedTodos;

  if (!localStorageTodos) {
    localStorage.setItem("TODOS_V1", JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

  // ================== State ==========================================

  const [todos, setTodos] = useState(parsedTodos);
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

  // ================== Funcion para persistencia de datos ==================================

  const saveTodos = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem("TODOS_V1", stringifiedTodos);
    setTodos(newTodos);
  };

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
