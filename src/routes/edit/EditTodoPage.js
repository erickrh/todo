import React from 'react';
import { TodoForm } from '../../ui/TodoForm';
import { useTodos } from '../useTodos';
import { useParams } from 'react-router-dom';

function EditTodoPage() {
  const params = useParams();
  const id = Number(params.id);
  const { statesUpdaters } = useTodos();
  const { editTodo } = statesUpdaters;

  return (
    <TodoForm
      label='Edita tu nuevo TODO'
      submitText='Editar'
      submitEvent={newText => editTodo(id, newText)}
    />
  );
}

export { EditTodoPage };