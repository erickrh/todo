import React from 'react';
import { TodoContext } from '../TodoContext';
import profile from './profile.png';

// Manera de estilizar con CSS
const estilos = {
  color: "white",
  fontWeight: "900",
  height: "10em",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "linear-gradient(to right, #4286f4, #373B44)",
  padding: "0",
  margin: "0.2em",
  position: "relative",
};

const profileCSS = {
  width: "3.5em",
  marginRight: "0.5em",
};

function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <div style={estilos}>
        <img src={profile} alt="Foto de perfil" style={profileCSS} />
        <div>
          <h2>Hola, Erick.</h2>{" "}
          {/*Otra manera, con doble llaves {{color: red}} */}
          <p style={{ fontWeight: "400", marginTop: "-1em" }}>
            Has completado {completedTodos} de {totalTodos} TODO's{" "}
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export { TodoCounter };
