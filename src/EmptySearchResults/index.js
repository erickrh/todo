import React from 'react';

function EmptySearchResults(props) {
  
  return (
    <p>No hay resultados para {props.searchValue}</p>
  );
}

export { EmptySearchResults };