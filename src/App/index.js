import React from 'react';
import { useTodos } from './useTodos';
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
import { TodoHeader } from '../TodoHeader';
import { EmptySearchResults } from '../EmptySearchResults';
import { ChangeAlert } from '../ChangeAlert';

// const defaultTodos = [
//   { text: 'Estudiar esperanto', completed: true },
//   { text: 'Hacer ejercicio', completed: false },
//   { text: 'Ir a la universidad', completed: false },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify([{ text: 'Estudiar esperanto', completed: true }, { text: 'Hacer ejercicio', completed: false }, { text: 'Ir a la universidad', completed: false }]));

function App() {
  const {
    error,
    loading,
    searcherTodos,
    completeTodo,
    deleteTodo,
    openModal,
    darkMode,
    setDarkMode,
    darkModeToggle,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    setOpenModal,
    addTodo,
    synchronizeTodos,
  } = useTodos();

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

export default App;