import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { HomePage } from './home/HomePage';
import { NewTodoPage } from './new/NewTodoPage';
import { EditTodoPage } from './edit/EditTodoPage';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path='/' component={HomePage} />

        <Route exact path="/new" component={NewTodoPage} />

        <Route exact path='/edit/:id' component={EditTodoPage} />

        <Route exact path='/:slug' component={HomePage} />
        
        <Route path='*' component={() => <p>No found</p>} />
      </Switch>
    </HashRouter>
  );
}

export { App };