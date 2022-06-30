import React from 'react';
import './CreateTodoButton.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCirclePlus} from '@fortawesome/free-solid-svg-icons';

function CreateTodoButton(props) {
    // Metodo dos.
    const onClickButton = () => {
        props.setOpenModal(true);
    };

    return (
        <div className='CreateTodoButtonContainer'>
            <FontAwesomeIcon 
            onClick={onClickButton}
            icon = {faCirclePlus} className='CreateTodoButton'
            />
        </div>
    )
}

export { CreateTodoButton };