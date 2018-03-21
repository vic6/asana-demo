import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';

const EnterProjectId = () => <Link to="/">Add Project id to the end of the url</Link>;

const Application = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/:id" component={App} />
      <Route component={EnterProjectId} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(<Application />, document.getElementById('app'));
