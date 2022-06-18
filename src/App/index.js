import React from 'react';
import { AppUI } from './AppUI';

// const defaultTodos = [
//   { text: 'Estudiar esperanto', completed: true },
//   { text: 'Hacer ejecicio', completed: false },
//   { text: 'Ir a la universidad', completed: false },
// ];

// Custom Hook

function useLocalStorage(itemName, initialValue) {

  // Estados
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);

  // useEffect: Permite ejecutar ciertas partes del codigo de nuestro componente, para que no se ejecute cada vez que se hace render en nuestro componente, si no dependiendo de ciertas condiciones. React ejecuta el useEffect luego del render de React, pero antes del render en el navegador.
  React.useEffect(() => {
    setTimeout(() => {
      try {
        // Obtener TODO'S de local storage
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
        } catch (error) {
          setError(error);
        }
    }, 1000); 
  }, []); // Array vacio para que se ejecute solo una vez al abrir la app, en el primer render.
  
  // Persistencia de los todos con localstorage.
  const saveItem = (newItem) => {
    try {
      const stringifiedTodos = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedTodos);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };
};

function App() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);

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
      loading={loading}
      error={error}
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