import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

function myApp() {
  return (
    <h1 id='title'>
      Hello world.
    </h1>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App saludo = "Hola mundo">
      Hello these are the children
    </App>
);