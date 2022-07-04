import React from "react";

// Custom Hook
function useLocalStorage(itemName, initialValue) {

    // Estados
    const [error, setError] = React.useState(true);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);
  
    // useEffect: Permite ejecutar ciertas partes del codigo de nuestro componente, para que no se ejecute cada vez que se hace render en nuestro componente, si no dependiendo de ciertas condiciones. React ejecuta el useEffect luego del render de React, pero antes del render en el navegador.
    React.useEffect(() => {
      setTimeout(() => {
        try {
          // Obtener TODO'S de local storage
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
          } catch (error) {
            setError(error);
          }
      }, 1000); 
    }, []); // Array vacio para que se ejecute solo una vez al abrir la app, en el primer render.
    
    // Persistencia de los todos con localstorage.
    const saveItem = (newItem) => {
      try {
        const stringifiedTodos = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedTodos);
        setItem(newItem);
      } catch (error) {
        setError(error);
      }
    };
  
    return {
      item,
      saveItem,
      loading,
      error,
    };
  };

export { useLocalStorage };