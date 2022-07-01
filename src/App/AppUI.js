import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { Modal } from "../Modal";
// import './App.css';

function AppUI() {
  const {
    error,
    loading,
    searcherTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />

      <TodoSearch />

      <TodoList>
        {error && <p>Error</p>}
        {loading && <p>Cargando...</p>}
        {!loading && !searcherTodos.length && <p>Crea tu primer TODO.</p>}

        {searcherTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {/* Si open modal es true, entonces renderiza los componentes y los elementos siguientes */}
      {openModal && (
        <Modal>
          <p>{searcherTodos[0]?.text}</p> {/* Preguntar si existe el array de todos antes de imprimir la propiedad text. Por lo que si no ha termiando de cargar nuestro local storage los todos, no aparecerá ningún texto. Pero cuando ya carguen, aparecerá. */}
        </Modal>
      )}

      <CreateTodoButton />
      
    </React.Fragment>
  );
}

export { AppUI };
