import React from 'react';

import { BrowserRoute, Route, Switch } from 'react-router-dom';

import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import ItemList from './../Item/ItemList';
import ItemDetail from './../Item/ItemDetail';
import styleApp from './Styles/_App.scss';

const routes = [
  {
    path: '/',
    exact: true,
    header: Header,
    main: Home
  },
  {
    path: '/items',
    exact: false,
    header: Header,
    main: ItemList
  },
  {
    path: '/items/:itemId',
    exact: true,
    header: Header,
    main: ItemDetail
  }
];

const app = () => (
  <div>
    <div>
      {routes.map((route, index) => (
        // You can render a <Route> in as many places
        // as you want in your app.
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.header}
        />
      ))}
    </div>
    <div className={ styleApp.main }>
      {routes.map((route, index) => (
        // Render more <Route>s with the same paths as
        // above, but different components this time.
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      ))}
    </div>
  </div>
)

export default app;
