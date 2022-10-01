import React from 'react';
import './TodoItem.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck, faTrash} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

function TodoItem(props) {

  return (
    <div className="TodoItemContainer">
      <li className={`TodoItem ${props.darkMode && 'TodoItemDarkMode'}`}>

        {/* Check Icon */}
        <FontAwesomeIcon
          icon = {faCheck} className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}  // Si props.completed es true, entonces se agrega la clase Icon-check--active 
          onClick={props.onComplete}
        /> 

        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}> {/* Si props.completed es true, entonces se agrega la clase TodoItem-p--complete */ }
          {props.text}
        </p>

        {/* Delete Icon */}
        <FontAwesomeIcon
          icon = {faTrash} className={`Icon Icon-delete ${props.darkMode && 'Icon-deleteDarkMode'}`} size="xs"
          onClick={props.onDelete}
        />

      </li>
    </div>
  );
}

// Fix for 'React eslint error missing in props validation'
TodoItem.propTypes = {
  darkMode: PropTypes.node.isRequired,
  completed: PropTypes.node.isRequired,
  onComplete: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  onDelete: PropTypes.node.isRequired,
};

export { TodoItem };