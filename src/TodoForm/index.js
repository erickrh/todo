import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm() {
    const [newTodovalue, setNewTodoValue] = React.useState('');

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (newTodovalue.length > 0) {
            addTodo(newTodovalue);
            setOpenModal(false);
        } else {
            document.querySelector('.textArea').placeholder = "Por favor introduce una tarea.";
            document.querySelector('.textArea').focus();
        }
    };

     const onKeyDown = (e) => {
       if (e.key === 'Enter') onSubmit(e)
       else if (e.keyCode === 27) onCancel();
     };

    return (
        <form action="" onSubmit={onSubmit}>
            <label htmlFor="">Escribe tu nuevo TODO</label>
            <textarea
            name="" id="" cols="30" rows="10" className='textArea'
            autoFocus
            placeholder='Pasear al gato'
            value={newTodovalue}
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
                className='TodoForm-button TodoForm-button--add'
                type='submit'>
                    Añadir
                </button>
            </div>
        </form>
    );
}

export { TodoForm };