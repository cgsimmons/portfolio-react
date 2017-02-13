import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Layout from './components/Layout/Layout';
import IndexPage from './components/IndexPage/IndexPage';


export default () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={IndexPage} />
      </Route>
    </Router>
  );
};
