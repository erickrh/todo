import React from 'react';
import './TodosError.css';
import errorImage from './error.png';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
function TodosError({ error }) {
  return (
    <div className="errorContainer">
      <img src={errorImage} alt="Error" className='errorImage' />
    </div>
  );
}

TodosError.propTypes = {
  error: PropTypes.node.isRequired,
};

export { TodosError };