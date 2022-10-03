import React from 'react';
import PropTypes from 'prop-types';

function TodoHeader({ children }) {
  return (
    <header>
      {children}
    </header>
  );
}

TodoHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

export { TodoHeader };