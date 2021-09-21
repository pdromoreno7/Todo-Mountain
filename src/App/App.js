// import { useEffect, useState } from "react";
import { TodoProvider } from "../TodoContext/TodoContext";

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
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
