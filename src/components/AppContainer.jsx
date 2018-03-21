import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';

const EnterProjectId = () => (
  <h1 to="/:id">Add Project id to the end of the url(597581411344319)</h1>
);

const Application = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/:id" component={App} />
      <Route component={EnterProjectId} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(<Application />, document.getElementById('app'));
