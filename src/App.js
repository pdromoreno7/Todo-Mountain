// import { CreateTodoButton } from "./components/CreateTodoButton";
import { Header } from "./components/Header";
// import { TodoCounter } from "./components/TodoCounter";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";

// import './App.css';

const todos = [
  { text: "Cortar cebollas", completed: true },
  { text: "Lavar lo platos", completed: false },
  { text: "Ver El señor de los anillos", completed: false },
];

function App() {
  return (
    <>
      <Header />
      {/* <TodoCounter /> */}

      <TodoList>
        {todos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      {/* <CreateTodoButton /> */}
    </>
  );
}

export default App;
