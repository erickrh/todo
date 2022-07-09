import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
import { TodoContext } from '../TodoContext';

function Modal({ children }) {
    const { setOpenModal } = React.useContext(TodoContext);

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