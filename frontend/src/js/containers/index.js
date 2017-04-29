import React from 'react';
import { Router, Route, Redirect, Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Donation from './Donation';
import Edit from './Edit';
import Followed from './Followed';
import Main from './Main';
import Photo from './Photo';
import Profile from './Profile';
import Rank from './Rank';
import Task from './Task';
import Tasks from './Tasks';

const history = createBrowserHistory()

const routes = (
  <Router history={history}>
    <div>
      <Redirect from="/" to="/main" />
      <Route path="/donation" component={Donation}/>
      <Route path="/edit" component={Edit}/>
      <Route path="/followed" component={Followed}/>
      <Route path="/main" component={Main}/>
      <Route path="/photo" component={Photo}/>
      <Route path="/profile" component={Profile}/>
      <Route path="/rank" component={Rank}/>
      <Route path="/task" component={Task}/>
      <Route path="/tasks" component={Tasks}/>
    </div>
  </Router>
);

export default routes;
