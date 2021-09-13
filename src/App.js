// import { CreateTodoButton } from "./components/CreateTodoButton";
import { useState } from "react";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { Header } from "./components/Header";
import { TodoCounter } from "./components/TodoCounter";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";

// import './App.css';

const defaultTodos = [
  { text: "Cortar cebollas", completed: true },
  { text: "Lavar lo platos", completed: false },
  { text: "Ver El señor de los anillos", completed: false },
];

function App() {
  const [todos, setTodos] = useState(defaultTodos);
  const [searchValue, setSearchValue] = useState("");

  const completedTodos = todos.filter((todo) => todo.completed === true).length;
  const totalTodos = todos.length;
  return (
    <>
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoCounter total={totalTodos} completed={completedTodos} />

      <TodoList>
        {todos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
