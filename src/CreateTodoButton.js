import React from 'react';
import './CreateTodoButton.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCirclePlus} from '@fortawesome/free-solid-svg-icons';

function CreateTodoButton() {
    return (
        <div className='CreateTodoButtonContainer'>
            <FontAwesomeIcon icon = {faCirclePlus} className='CreateTodoButton' />
        </div>
    )
}

export { CreateTodoButton };