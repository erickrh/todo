import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState('');

  const {
    addTodo,
    setOpenModal,
    darkMode,
  } = React.useContext(TodoContext);

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (newTodoValue.length > 0) {
      addTodo(newTodoValue);
      setOpenModal(false);
    } else {
      document.querySelector('.textArea').placeholder = 'Por favor introduce una tarea.';
      document.querySelector('.textArea').focus();
    }
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter') onSubmit(e);
    else if (e.keyCode === 27) onCancel();
  };

  return (
    <form action="" onSubmit={onSubmit} className={`${darkMode && 'formDarkMode'}`}>
      <label className={`${darkMode && 'labelDarkMode'}`} htmlFor="">Escribe tu nuevo TODO</label>
      <textarea
        cols="30" rows="10" className={`textArea ${darkMode && 'textAreaDarkMode'}`}
        autoFocus
        placeholder='Pasear al gato'
        value={newTodoValue}
        onChange={onChange}
        onKeyDown={onKeyDown}
      ></textarea>

      <div className='TodoForm-buttonContainer'>
        <button
          onClick={onCancel}
          type="button"
          className='TodoForm-button TodoForm-button--cancel'>
                    Cancelar
        </button>

        <button
          className={`TodoForm-button TodoForm-button--add ${darkMode && 'TodoForm-button--add-darkMode'}`}
          type='submit'>
                    Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };