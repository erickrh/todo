import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {
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
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searcherTodos,
            completeTodo,
            deleteTodo,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
};

export { TodoContext, TodoProvider };