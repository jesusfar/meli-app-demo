import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';

import App from './App';
import appReducers from './reducers';

let store = createStore(appReducers);

const Index = () => (
  <BrowserRouter>
    <App store={store} />
  </BrowserRouter>
);

render(<Index/>, document.getElementById('root'));
