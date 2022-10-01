import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';

// const defaultTodos = [
//   { text: 'Estudiar esperanto', completed: true },
//   { text: 'Hacer ejercicio', completed: false },
//   { text: 'Ir a la universidad', completed: false },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify([{ text: 'Estudiar esperanto', completed: true }, { text: 'Hacer ejercicio', completed: false }, { text: 'Ir a la universidad', completed: false }]));

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;