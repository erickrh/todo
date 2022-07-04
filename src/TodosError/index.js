import React from 'react';
import './TodosError.css';
import errorImage from './error.png';

function TodosError({ error }) {
    return (
        <div className="errorContainer">
            <img src={errorImage} alt="Error" className='errorImage' />
        </div>
    );
};

export { TodosError };