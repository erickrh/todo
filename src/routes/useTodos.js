import React from 'react';
import { useLocalStorage } from './useLocalStorage';

function useTodos() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
    synchronizeItem: synchronizeTodos,
  } = useLocalStorage('TODOS_V1', []);
    
  // Estado de TodoSearch
  const [searchValue, setSearchValue] = React.useState('');

  // Modal
  const [openModal, setOpenModal] = React.useState(false);
    
  // TodoCounter
  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;
  /* completedTodos & totalTodos, son estados derivados, ya que son creados a partir de un estado independiente, como lo es todos proveniente de useLocalStorage. */
      
  // Filtro
  let searcherTodos; // Estado derivado.
  if (!searchValue.length >= 1) {
    searcherTodos = todos;
  } else {
    searcherTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  // Añadir To-do
  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.unshift({
      completed: false,
      text,
    });
    saveTodos(newTodos);
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

  // Dark Mode
  const [ darkMode, setDarkMode ] = React.useState(false);
  const darkModeToggle = () => {
    if (darkMode) {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    } else if (!darkMode) {
      document.body.style.backgroundColor = '#202124';
      document.body.style.color = '#fff7f7';
    }
  };

  // Estados
  const states = {
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    searcherTodos,
    openModal,
    darkMode,
  };

  // Actualizadores del estado
  const statesUpdaters = {
    setSearchValue,
    completeTodo,
    addTodo,
    deleteTodo,
    setOpenModal,
    setDarkMode,
    darkModeToggle,
    synchronizeTodos,
  };

  return { states, statesUpdaters };
}

export { useTodos };