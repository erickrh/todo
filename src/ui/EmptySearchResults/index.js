import React from 'react';
import './EmptySearchResults.css';

function EmptySearchResults(props) {
  
  return (
    <p className='EmptySearchResults--msg'>No hay resultados para {props.searchValue}</p>
  );
}

export { EmptySearchResults };