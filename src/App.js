import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
// import './App.css';

const todos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Cocinar', completed: false },
  { text: 'Renderizar', completed: false },
];

function App() {
  return (
    <React.Fragment>

      <TodoCounter />

      <TodoSearch />

      <TodoList>
        {todos.map(todo => (
          <TodoItem
          key = {todo.text}
          text = {todo.text}
          completed = {todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />

    </React.Fragment>
    );
}

export default App;