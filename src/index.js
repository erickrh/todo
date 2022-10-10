import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';

function App(props) {
  return (
    <h1>¡{props.saludo}, {props.name}!</h1>
  );
}

// HOC
function withSaludo(WrappedComponent) {
  return function WrappedComponentWithSaludo(saludo) {
    return function componenteDeVerdad(props) {
      return (
        <React.Fragment>
          <WrappedComponent {...props} saludo={saludo} />
          <p>HOC was here.</p>
        </React.Fragment>
      );
    };
  };
}

const AppWithSaludo = withSaludo(App)('Hello world');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <App />
  <AppWithSaludo name='Erick' />
);