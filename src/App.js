// import { CreateTodoButton } from "./components/CreateTodoButton";
import { useState } from "react";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { Header } from "./components/Header";
import { TodoCounter } from "./components/TodoCounter";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";

// import './App.css';
// Se creo este arreglo para mandar informacion de los todos:
const defaultTodos = [
  { text: "Platzi", completed: true },
  { text: "Lavar lo platos", completed: true },
  { text: "Church Proyect", completed: false },
  { text: "Running", completed: false },
  { text: "Leer Clean JavaScript", completed: false },
];

function App() {
  const [todos, setTodos] = useState(defaultTodos);
  const [searchValue, setSearchValue] = useState("");

  // La siguiente linea filtra los todos completados osea los que viene con un true
  //Esto para mostraslo en todoCounter:
  const completedTodos = todos.filter((todo) => todo.completed === true).length;
  const totalTodos = todos.length;

  // Arreglo para mostrar en panatalla los todos busccados en el search:
  let searchedTodos = [];

  //Se evalua si en estado searchValue tenga un valor
  //tranformamos a minuscula:
  // Se llama el estado de SearchValue para pasarlo a minuscula:
  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();

      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const toggleCompleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);

    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos);
  };
  const delateTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);

    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

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
            onDelete={() => delateTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
