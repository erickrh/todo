import React from 'react';
import './TodoSearch.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function TodoSearch({
  searchValue,
  setSearchValue,
  darkMode,
  loading
}) {

  const { slug } = useParams();
  const history = useHistory();

  React.useEffect(() => {
    if (slug) setSearchValue(slug);
  }, []);

  const onSearchValueChange = event => {
    setSearchValue(event.target.value); // Se actualizará el estado.
    history.push('/' + event.target.value);
  };


  return (
    <div className='TodoSearchContainer'>
      <div className="supportSearchContainer">
        {/* Search Icon */}
        <FontAwesomeIcon icon = {faMagnifyingGlass}
          className={`iconSearch ${darkMode && 'iconSearchDarkMode'} ${loading && 'iconSearch--disabled'}`}
        />

        <input
          autoFocus className={`TodoSearch ${darkMode && 'TodoSearchDarkMode'}`} type="text" placeholder="Buscar"
          value={slug || searchValue} // React exige conectar el valor de nuestro input con el estado.
          onChange={onSearchValueChange} // En cada cambio actualiza el estado.
          disabled={loading} // Será true, mientras loading sea true.
        />
      </div>
    </div>
  );
}

export { TodoSearch };