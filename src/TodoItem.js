import React from 'react';
import './TodoItem.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck, faTrash} from '@fortawesome/free-solid-svg-icons';

function TodoItem(props) {
    const OnComplete = () => {
        console.log(`Ya completaste el todo: ${props.text}`);
    };

    const OnDelete = () => {
        console.log(`Has borrado el todo: ${props.text}`);
    };

    return (
        <div className="TodoItemContainer">
            <li className='TodoItem'>

                {/* Check Icon */}
                <FontAwesomeIcon
                    icon = {faCheck} className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}  // Si props.completed es true, entonces se agrega la clase Icon-check--active 
                    onClick={OnComplete}
                /> 

                <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}> {/* Si props.completed es true, entonces se agrega la clase TodoItem-p--complete */ }
                    {props.text}
                </p>

                {/* Delete Icon */}
                <FontAwesomeIcon
                    icon = {faTrash} className='Icon Icon-delete' size="xs"
                    onClick={OnDelete}
                />

            </li>
        </div>
    )
}

export { TodoItem };