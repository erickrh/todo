import React from 'react';
import './TodoSearch.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

// eslint-disable-next-line react/prop-types
function TodoSearch({ searchValue, setSearchValue, darkMode }) {

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value); // Se actualizará el estado.
  };

  return (
    <div className='TodoSearchContainer'>
      <div className="supportSearchContainer">
        {/* Search Icon */}
        <FontAwesomeIcon icon = {faMagnifyingGlass} className={`iconSearch ${darkMode && 'iconSearchDarkMode'}`} />

        <input
          autoFocus className={`TodoSearch ${darkMode && 'TodoSearchDarkMode'}`} type="text" placeholder="Buscar"
          value={searchValue} // React exige conectar el valor de nuestro input con el estado.
          onChange={onSearchValueChange} // En cada cambio actualiza el estado.
        />
      </div>
    </div>
  );
}

export { TodoSearch };