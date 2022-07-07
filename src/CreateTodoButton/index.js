import React from 'react';
import './CreateTodoButton.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCirclePlus} from '@fortawesome/free-solid-svg-icons';
import { TodoContext } from '../TodoContext';

function CreateTodoButton() {
    const { openModal, setOpenModal} = React.useContext(TodoContext);

    const onClickButton = () => {
        setOpenModal(prevState => !prevState); // Toggle.
    };

    const animateButton = () => {
        document.querySelector('.CreateTodoButtonContainer').classList.add('buttonAnimation');
    }

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