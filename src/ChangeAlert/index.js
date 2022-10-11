import React from 'react';
import { WithStorageListener } from './WithStorageListener';

function ChangeAlert({ show, toggleShow }) {
  if (show) {
    return (
      <div>
        <p>Hubo cambios.</p>
        <button
          onClick={toggleShow}
        >
          Refrescar información.
        </button>
      </div>
    );
  } else {
    return null;
  }
}

const ChangeAlertWithStorageListener = WithStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };