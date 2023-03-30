import React from 'react';
import { useHistory } from 'react-router-dom';
import './TodoForm.css';

function TodoForm(props) {
  const history = useHistory();
  const [newTodoValue, setNewTodoValue] = React.useState(props.defaultTodoText || '');

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onCancel = () => {
    history.push('/');
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (newTodoValue.length > 0) {
      props.submitEvent(newTodoValue);
      history.push('/');
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
    <div className="flexContainer">
      <form action="" onSubmit={onSubmit} /*className={`${darkMode && 'formDarkMode'}`}*/>
        <label /*className={`${darkMode && 'labelDarkMode'}`}*/>{props.label}</label>
        <textarea
          cols="30" rows="10" className={`textArea {$/*{darkMode && 'textAreaDarkMode'}*/`}
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
            className={`TodoForm-button TodoForm-button--add ${/*darkMode &&*/ 'TodoForm-button--add-darkMode'}`}
            type='submit'>
            {props.submitText}
          </button>
        </div>
      </form>
    </div>
  );
}

export { TodoForm };