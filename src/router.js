import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './components/app';
import Main from './components/main';


export default () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Main} />
      </Route>
    </Router>
  );
};
