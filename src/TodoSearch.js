import React from 'react';
import './TodoSearch.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

function TodoSearch() {
    return (
        <div className='TodoSearchContainer'>
            <FontAwesomeIcon icon = {faMagnifyingGlass} className='iconSearch' />
            <input autoFocus className='TodoSearch' type="text" placeholder="Buscar" />
        </div>
    )
}

export { TodoSearch };