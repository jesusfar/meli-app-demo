import React from 'react';

import { Route, NavLink } from 'react-router-dom';
import Header from './Component/Header/Header';

import styles from './Styles/_App.scss';

const app = () => (
  <div className={ styles.app }>
      <Header />
  </div>
)

export default app;
