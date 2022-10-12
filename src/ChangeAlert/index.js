import React from 'react';
import { WithStorageListener } from './WithStorageListener';
import './ChangeAlert.css';

function ChangeAlert({ show, toggleShow }) {
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

const ChangeAlertWithStorageListener = WithStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };