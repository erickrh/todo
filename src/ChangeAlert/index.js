import React from 'react';
import { useStorageListener } from './useStorageListener';
import './ChangeAlert.css';

function ChangeAlert({ synchronize }) {
  const {show, toggleShow} = useStorageListener(synchronize);
  
  if (show) {
    return (
      <div className="ChangeAlert-bg">
        <div className="ChangeAlert-container">
          <p>Parece que cambiaste tus TODOs, desde otra pestaña o ventana del navegador</p>
          <p>¿Quieres sincronizar tus TODOs?</p>
          <button
            onClick={toggleShow}
          >
          Yeah!
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export { ChangeAlert };