import React from 'react';

// Custom Hook
function useLocalStorage(itemName, initialValue) {

  const [state, dispatch] = React.useReducer(reducer, initialState({ initialValue }));

  // Se destructura para evitar escribir en cada una de las variables state. como prefijo. Ejemplo state.error
  const {
    synchronizedItem,
    error,
    loading,
    item,
  } = state;

  // ACTION CREATOS
  const onError = error => dispatch({ type: actionTypes.error, payload: error });
  const onSuccess = parsedItem => dispatch({ type: actionTypes.success, payload: parsedItem });
  const onSave = newItem => dispatch({ type: actionTypes.save, payload: newItem });
  const onSynchronize = () => dispatch({ type: actionTypes.synchronize });
  
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

        onSuccess(parsedItem);
      } catch (error) {
        onError(error);
      }
    }, 1000); 
  }, [synchronizedItem]); // Array vacío para que se ejecute solo una vez al abrir la app, en el primer render.
    
  // Persistencia de los todos con localstorage.
  const saveItem = (newItem) => { // Estado derivado.
    try {
      const stringifiesTodos = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiesTodos);
      onSave(newItem);
    } catch (error) {
      onError(error);
    }
  };

  const synchronizeItem = () => {
    onSynchronize();
  };
  
  return {
    item,
    saveItem,
    loading,
    error,
    synchronizeItem,
  };
}

// Se crea como función para poder recibir el objeto initialValue, estando por fuera del custom hook useLocalStorage.
const initialState = ({ initialValue }) => ({
  synchronizedItem: true,
  error: false,
  loading: true,
  item: initialValue,
});

const actionTypes = {
  error: 'ERROR',
  success: 'SUCCESS',
  save: 'SAVE',
  synchronize: 'SYNCHRONIZE',
};

const reducer = (state, action) => {
  switch(action.type) {
  case actionTypes.error: 
    return {
      ...state,
      error: true,
    };
  case actionTypes.success:
    return {
      ...state,
      item: action.payload,
      loading: false,
      synchronizedItem: true,
      error: false,
    };
  case actionTypes.save:
    return {
      ...state,
      item: action.payload,
    };
  case actionTypes.synchronize:
    return {
      ...state,
      loading: true,
      synchronizedItem: false,
    };
  default: 
    return {...state};
  }
};

export { useLocalStorage };