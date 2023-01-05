import React from 'react';

// Custom Hook
function useLocalStorage(itemName, initialValue) {

  // Estados
  const [synchronizedItem, setSynchronizedItem] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);
  
  // useEffect: Permite ejecutar ciertas partes del código de nuestro componente, para que no se ejecute cada vez que se hace render en nuestro componente, sino dependiendo de ciertas condiciones. React ejecuta el useEffect luego del render de React, pero antes del render en el navegador.
  React.useEffect(() => {
    setTimeout(() => {
      try {
        // Obtener TO-DOs de local storage
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
  
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
  
        setItem(parsedItem);
        setLoading(false);
        setSynchronizedItem(true);
      } catch (error) {
        setError(error);
      }
    }, 1000); 
  }, [synchronizedItem]); // Array vacío para que se ejecute solo una vez al abrir la app, en el primer render.
    
  // Persistencia de los todos con localstorage.
  const saveItem = (newItem) => { // Estado derivado.
    try {
      const stringifiesTodos = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiesTodos);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  const synchronizeItem = () =>{
    setLoading(true);
    setSynchronizedItem(false);
  };
  
  return {
    item,
    saveItem,
    loading,
    error,
    synchronizeItem,
  };
}

export { useLocalStorage };