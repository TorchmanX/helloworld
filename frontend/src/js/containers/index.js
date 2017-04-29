import React from 'react';
import { Router, Route, Redirect, Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Game from './Game';

const history = createBrowserHistory()

const routes = (
  <Router history={history}>
    <div>
      <Redirect from="/" to="/" />
      <Route path="/" component={Game}/>
    </div>
  </Router>
);

export default routes;
