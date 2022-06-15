import React from 'react';
import './TodoSearch.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

function TodoSearch() {
    const [searchValue, setSearchValue] = React.useState('');

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value); // Se actualizará el estado.
    };

    return [
        <React.Fragment>
            <div className='TodoSearchContainer'>
                {/* Search Icon */}
                <FontAwesomeIcon icon = {faMagnifyingGlass} className='iconSearch' />

                <input
                autoFocus className='TodoSearch' type="text" placeholder="Buscar"
                value={searchValue} // React exige conectar el valor de nuestro input con el estado.
                onChange={onSearchValueChange} // En cada cambio actualiza el estado.
                />
            </div>
            <p>{searchValue}</p>
        </React.Fragment>
    ]
}

export { TodoSearch };