import React from 'react';
import './TodoList.css';
import PropTypes from 'prop-types';

function TodoList(props) {
  return (
    <section>
      <ul className='TodoListContainer'>
        {props.children}
      </ul>
    </section>
  );
}

// Fix for 'React eslint error missing in props validation'
TodoList.propTypes = {
  children: PropTypes.node.isRequired,
};

export { TodoList };