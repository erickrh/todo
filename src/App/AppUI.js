import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
// import './App.css';

function AppUI () {
    return (
        <React.Fragment>

        <TodoCounter />
  
        <TodoSearch />
  
        <TodoContext.Consumer>
            {({
                error,
                loading,
                searcherTodos,
                completeTodo,
                deleteTodo
            })  => (
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
            )}
        </TodoContext.Consumer>
  
        <CreateTodoButton />
  
      </React.Fragment>
    );
};

export { AppUI };