import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';
import Routes from './router';

const App = () => {
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(reducers, {}, composeEnhancers(
    applyMiddleware(ReduxThunk),
  ));
  /* eslint-enable */
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};


ReactDOM.render(<App />, document.getElementById('root'));
