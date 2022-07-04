import React from 'react';
import './EmptyTodos.css';
import crearImage from './crea.png';

function EmptyTodos() {
    return (
        <div className="emptyTodosContainer">
            <img src={crearImage} alt="Crea tu primer TODOS" className='crearImage' />
        </div>
    );
};

export { EmptyTodos };