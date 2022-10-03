import React from 'react';
import logo from './logo.png';
import PropTypes from 'prop-types';

// Manera de estilizar con CSS
const estilos = {
  color: 'white',
  fontWeight: '900',
  height: '10em',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'linear-gradient(to right, #4286f4, #373B44)',
  padding: '0',
  margin: '0.2em',
  position: 'relative',
};

const logoCSS = {
  width: '3em',
  marginRight: '0.5em',
};

function TodoCounter({ totalTodos, completedTodos }) {

  return (
    <React.Fragment>
      <div style={estilos}>
        <img src={logo} alt="logo" style={logoCSS} />
        <div>
          <h2>¡Hola!</h2>
          {/*Otra manera, con doble llaves {{color: red}} */}
          <p style={{ fontWeight: '400', marginTop: '-1em' }}>
            Has completado {completedTodos} de {totalTodos} TODO&apos;s{' '}
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

TodoCounter.propTypes = {
  totalTodos: PropTypes.number.isRequired,
  completedTodos: PropTypes.number.isRequired,
};

export { TodoCounter };