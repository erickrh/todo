import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
// import './App.css';

function AppUI ({
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searcherTodos,
    completeTodo,
    deleteTodo,
}) {
    return (
        <React.Fragment>

        <TodoCounter
          total = {totalTodos}
          completed = {completedTodos}
        />
  
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
  
        <TodoList>
          {error && <p>Error</p>}
          {loading && <p>Cargando...</p>}
          {(!loading && !searcherTodos.length) && <p>Crea tu primer TODO.</p>}

          {searcherTodos.map(todo => (
            <TodoItem
            key = {todo.text}
            text = {todo.text}
            completed = {todo.completed}
            onComplete = {() => completeTodo(todo.text)}
            onDelete = {() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
  
        <CreateTodoButton />
  
      </React.Fragment>
    );
};

export { AppUI };