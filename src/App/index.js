import React from 'react';
import { AppUI } from './AppUI';

// const defaultTodos = [
//   { text: 'Estudiar esperanto', completed: true },
//   { text: 'Hacer ejecicio', completed: false },
//   { text: 'Ir a la universidad', completed: false },
// ];

// Custom Hook
function useLocalStorage(itemName, initialValue) {

  // Obtener TODO'S de local storage
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  // Estado de TODO's
  const [item, setItem] = React.useState(parsedItem);
  
  // Persistencia de los todos con localstorage.
  const saveItem = (newItem) => {
    const stringifiedTodos = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedTodos);
    setItem(newItem);
  };

  return [
    item,
    saveItem
  ];
};

function App() {
  const [todos, saveItem] = useLocalStorage('TODOS_V1', []);

  // Estado de TodoSearch
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

  // Marcar check
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed; // Toggle.
    saveItem(newTodos);
  };

  // Delete
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveItem(newTodos);
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