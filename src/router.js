import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Layout from './components/Layout/Layout';
import IndexPage from './components/IndexPage/IndexPage';


export default () => {
  return (
    <Router history={browserHistory} >
      <Route path="/" component={Layout}>
        <IndexRoute component={IndexPage} />
      </Route>
    </Router>
  );
};
