import React from 'react';
import './CreateTodoButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

function CreateTodoButton(props) {
  return (
    <div className='CreateTodoButtonContainer'>
      <FontAwesomeIcon 
        onClick={props.onClick}
        icon = {faCirclePlus} className='CreateTodoButton'
      />
    </div>
  );
}

export { CreateTodoButton };