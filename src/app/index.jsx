import React from 'react';
import { render } from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import {  ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import App from './App';
import reducers from './reducers';
import meliApiService from './services/MeliApiService';

// Create History browser
const history = createHistory();

// Middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);
const loggerMiddleware = createLogger();

// Add the reducers and apply middlewares
const store = createStore(reducers, {}, applyMiddleware(meliApiService, middleware, loggerMiddleware));

const Index = () => (
  <Provider store={store}>
    <ConnectedRouter history={ history }>
      <App />
    </ConnectedRouter>
  </Provider>
);

render(<Index/>, document.getElementById('root'));
