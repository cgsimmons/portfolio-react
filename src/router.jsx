import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';

export default () => (
  <BrowserRouter>
    <Route path="/" component={Layout} />
  </BrowserRouter>
);
