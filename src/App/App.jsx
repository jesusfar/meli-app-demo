import React from 'react';

import { Route, NavLink } from 'react-router-dom';
import Header from './Component/Header/Header';

import CategoryPath from './../Category/CategoryPath';

import styleApp from './Styles/_App.scss';
import styleGrid from './Styles/_GridSystem.scss';

const app = () => (
  <div className={ styleApp.app }>
      <Header />
      <main className={ styleGrid.container }>
        <CategoryPath />
      </main>
  </div>
)

export default app;
