import React from 'react';
import { AppUI } from './AppUI';

// const defaultTodos = [
//   { text: 'Estudiar esperanto', completed: true },
//   { text: 'Hacer ejecicio', completed: false },
//   { text: 'Ir a la universidad', completed: false },
// ];

function App() {
  // Local Storage
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;

  if (!localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }


  // Estados
  const [todos, setTodos] = React.useState(parsedTodos);

  // TodoSearch
  const [searchValue, setSearchValue] = React.useState('');

  // TodoCounter
  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;
  
  // Filtro
  let searcherTodos = [];
  if (!searchValue.length >= 1) {
    searcherTodos = todos;
  } else {
    searcherTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })
  }

  // Persistencia de los todos con localstorage.
  const saveTodos = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem('TODOS_V1', stringifiedTodos);
    setTodos(newTodos);
  };

  // Marcar check
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed; // Toggle.
    saveTodos(newTodos);
  };

  // Delete
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <AppUI
      totalTodos = {totalTodos}
      completedTodos = {completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searcherTodos={searcherTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;