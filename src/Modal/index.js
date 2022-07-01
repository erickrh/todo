import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
import { TodoContext } from '../TodoContext';

function Modal({ children }) {
    const { openModal, setOpenModal} = React.useContext(TodoContext);

    // Metodo dos.
    const onClickBackground = () => {
        setOpenModal(prevState => !prevState); // Toggle.
    };

    return ReactDOM.createPortal(
        <div onClick={onClickBackground} className='ModalBackground'>
            {children}
        </div>,
        document.getElementById('modal')
    );
}

export { Modal };