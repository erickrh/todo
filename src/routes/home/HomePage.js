import React from 'react';
import { useTodos } from '../useTodos';
import { TodoCounter } from '../../ui/TodoCounter';
import { TodoItem } from '../../ui/TodoItem';
import { CreateTodoButton } from '../../ui/CreateTodoButton';
import { TodoSearch } from '../../ui/TodoSearch';
import { TodoList } from '../../ui/TodoList';
import { Modal } from '../../ui/Modal';
import { TodoForm } from '../../ui/TodoForm';
import { TodosLoading } from '../../ui/TodosLoading';
import { TodosError } from '../../ui/TodosError';
import { EmptyTodos } from '../../ui/EmptyTodos';
import { DarkMode } from '../../ui/DarkMode';
import { TodoHeader } from '../../ui/TodoHeader';
import { EmptySearchResults } from '../../ui/EmptySearchResults';
import { ChangeAlert } from '../../ui/ChangeAlert';

// const defaultTodos = [
//   { text: 'Estudiar esperanto', completed: true },
//   { text: 'Hacer ejercicio', completed: false },
//   { text: 'Ir a la universidad', completed: false },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify([{ text: 'Estudiar esperanto', completed: true }, { text: 'Hacer ejercicio', completed: false }, { text: 'Ir a la universidad', completed: false }]));

function HomePage() {
  const { states, statesUpdaters } = useTodos();

  const {
    error,
    loading,
    searcherTodos,
    searchValue,
    openModal,
    darkMode,
    totalTodos,
    completedTodos
  } = states;
  
  const {
    addTodo,
    completeTodo,
    deleteTodo,
    synchronizeTodos,
    darkModeToggle,
    setDarkMode,
    setSearchValue,
    setOpenModal,
  } = statesUpdaters;

  return (
    <React.Fragment>

      <TodoHeader loading={loading}>

        <DarkMode
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          darkModeToggle={darkModeToggle}
        />

        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />

        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          darkMode={darkMode}
        />
      </TodoHeader>
      
      <TodoList
        error={error}
        loading={loading}
        searcherTodos={searcherTodos}
        totalTodos={totalTodos}
        onError={() => <TodosError />}
        onLoading={() => (
          new Array(3)
            .fill(1)
            .map((item, index) => <TodosLoading key={index}/>)
        )}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={() => <EmptySearchResults searchValue={searchValue} />}
        render={todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
            onEdit={() => console.log('Editando Todo')}
            darkMode={darkMode}
          />
        )}
      >
        {todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
            onEdit={() => console.log('Editando Todo')}
            darkMode={darkMode}
          />
        )}
      </TodoList> 
      
      
      
      {/* With Custom Hooks:
    
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
      */}

      {/* Si open modal es true, entonces renderiza los componentes y los elementos siguientes */}
      {openModal && (
        <Modal setOpenModal={setOpenModal}>
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
            darkMode={darkMode}
          />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} />

      <ChangeAlert
        synchronize={synchronizeTodos}
      />

    </React.Fragment>
  );
}

export { HomePage };