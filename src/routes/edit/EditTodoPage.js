import React from 'react';
import { TodoForm } from '../../ui/TodoForm';
import { useTodos } from '../useTodos';
import { useLocation, useParams } from 'react-router-dom';

function EditTodoPage() {
  const params = useParams();
  const id = Number(params.id);
  const location = useLocation();
  const { states, statesUpdaters } = useTodos();
  const { loading, getTodo } = states;
  const { editTodo } = statesUpdaters;

  let todoText;

  if (location.state?.todo) {
    todoText = location.state.todo.text;
  } else if (loading) {
    return <p>Cargando...</p>;
  } else {
    const todo = getTodo(id);
    todoText = todo.text;
  }

  return (
    <TodoForm
      label='Edita tu nuevo TODO'
      defaultTodoText={todoText}
      submitText='Editar'
      submitEvent={newText => editTodo(id, newText)}
    />
  );
}

export { EditTodoPage };