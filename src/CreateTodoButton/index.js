import React from 'react';
import './CreateTodoButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { TodoContext } from '../TodoContext';

function CreateTodoButton() {
  const { setOpenModal } = React.useContext(TodoContext);

  const onClickButton = () => {
    setOpenModal(prevState => !prevState); // Toggle.
  };

  return (
    <div className='CreateTodoButtonContainer'>
      <FontAwesomeIcon 
        onClick={onClickButton}
        icon = {faCirclePlus} className='CreateTodoButton'
      />
    </div>
  );
}

export { CreateTodoButton };