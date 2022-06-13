import React from 'react';
import './CreateTodoButton.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCirclePlus} from '@fortawesome/free-solid-svg-icons';

function CreateTodoButton() {
    // Metodo dos.
    const onClickButton = (msg) => {
        alert(msg);
    };

    return (
        <div className='CreateTodoButtonContainer'>
            <FontAwesomeIcon 
            // onClick={() => console.log('Click here.')} // Se debe envolver en una funcion. Metodo uno.
            onClick={() => onClickButton('Here should be open the modal window.')} // Se envuelve en una funcion.
            icon = {faCirclePlus} className='CreateTodoButton'
            />
        </div>
    )
}

export { CreateTodoButton };