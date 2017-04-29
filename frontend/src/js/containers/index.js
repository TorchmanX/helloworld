import React from 'react';
import { Router, Route, Redirect, Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Main from './Main';

const history = createBrowserHistory()

const routes = (
  <Router history={history}>
    <div>
      <Redirect from="/" to="/" />
      <Route path="/" component={Main}/>
    </div>
  </Router>
);

export default routes;
