import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { DarkMode } from '../DarkMode';

function AppUI() {
  const {
    error,
    loading,
    searcherTodos,
    completeTodo,
    deleteTodo,
    openModal,
    darkMode,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      
      <DarkMode />

      <TodoCounter />

      <TodoSearch />

      <TodoList>
        {error && <TodosError error={error} />}

        {loading && 
          new Array(3).fill(undefined, undefined, undefined).map((item, index) => <TodosLoading key={index} />
          )}
        
        {!loading && !searcherTodos.length && <EmptyTodos />}

        {searcherTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
            darkMode={darkMode}
          />
        ))}
      </TodoList>

      {/* Si open modal es true, entonces renderiza los componentes y los elementos siguientes */}
      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton />

    </React.Fragment>
  );
}

export { AppUI };
