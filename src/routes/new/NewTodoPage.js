import React from 'react';
import { TodoForm } from '../../ui/TodoForm';
import { useTodos } from '../useTodos';

function NewTodoPage() {
  const { statesUpdaters } = useTodos();
  
  return (
    <TodoForm
      label='Escribe tu nuevo TODO'
      submitText='Añadir'
      submitEvent={statesUpdaters.addTodo}
    />
  );
}

export { NewTodoPage };