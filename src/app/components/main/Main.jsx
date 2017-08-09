import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './../home/Home';
import ItemContainer from './../../../item/ItemContainer';
import ItemDetail from './../../../item/ItemDetail';
import styleApp from './../../styles/_App.scss';

const routes = [
  {
    path: '/',
    exact: true,
    main: Home
  },
  {
    path: '/items',
    main: ItemContainer
  },
  {
    path: '/items/:itemId',
    main: ItemDetail
  }
];

const Main = () => (
  <div className={ styleApp.main } >
    <Switch>
    {routes.map((route, index) => (
      // You can render a <Route> in as many places
      // as you want in your app.
      <Route
        key={index}
        path={route.path}
        exact={route.exact}
        component={route.main}
      />
    ))}
    </Switch>
  </div>
)

export default Main;
