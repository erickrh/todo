import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

function Modal({ children, setOpenModal }) {
  
  const hideModalClickOutside = () => {
    setOpenModal(false);
  };
    
  return ReactDOM.createPortal(
    <div className='ModalBackground'>
      {children}
      <div className='clickOutside' onClick={hideModalClickOutside}></div>
    </div>,
    document.getElementById('modal')
  );
}

export { Modal };