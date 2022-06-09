import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
    return (
        <li className='TodoItem'>
            <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>C</span> {/* Si props.completed es true, entonces se agrega la clase Icon-check--active */ }
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}> {/* Si props.completed es true, entonces se agrega la clase TodoItem-p--complete */ }
                {props.text}
            </p>
            <span className='Icon Icon-delete'>X</span>
        </li>
    )
}

export { TodoItem };