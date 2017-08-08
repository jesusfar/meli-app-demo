import React from 'react';
import classNames from 'classnames/bind';

import styleCategoryPath from './CategoryPath.scss';

let cx = classNames.bind(styleCategoryPath);

class CategoryPath extends React.Component {

  render() {
    let classNameSection = cx('row', 'category-path');
    let classNameNav = cx('col-offset-md-1', 'col-md-10');
    return (
      <section className={ classNameSection }>
        <nav className={ classNameNav } role='navbar'>
          <ol>
            <li>Electronica Audio <a href="#">Electronica</a></li>
            <li>Celulares </li>
            <li>3g </li>
          </ol>
        </nav>
      </section>
    )
  }
}

export default CategoryPath;
