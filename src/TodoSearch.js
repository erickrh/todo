import React from 'react';
import './TodoSearch.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

function TodoSearch() {
    const onSearchValueChange = (event) => {
        console.log(event.target.value);
    };

    return (
        <div className='TodoSearchContainer'>
            {/* Search Icon */}
            <FontAwesomeIcon icon = {faMagnifyingGlass} className='iconSearch' />

            <input
            autoFocus className='TodoSearch' type="text" placeholder="Buscar"
            onChange={onSearchValueChange}
            />
        </div>
    )
}

export { TodoSearch };