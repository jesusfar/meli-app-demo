import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styleCategoryPath from './CategoryPath.scss';

let cx = classNames.bind(styleCategoryPath);

class CategoryPath extends React.Component {

  render() {
    let classNameNav = cx('category-path', 'col-offset-md-1', 'col-md-10', 'col-sm-12', 'col-xs-12');
    return (
      <nav className={ classNameNav } role='navbar'>
        <ol>
          { this.props.categories.map((category, index) => (
            <li key={index}>{ category } {(index < this.props.categories.length-1) ? '>' : '' } </li>
          ))}
        </ol>
      </nav>
    )
  }
}

CategoryPath.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string)
}

export default CategoryPath;
