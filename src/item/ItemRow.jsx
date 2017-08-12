import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styleItem from './ItemRow.scss';

let cx = classNames.bind(styleItem);

class ItemRow extends React.Component {

  render() {
    let classNameItem = cx('row');
    let classNameFigure = cx('col-md-2', 'col-offset-md-1');
    let classNameSection = cx('col-md-6');
    let classNamePicture = cx('item-picture');

    return (
      <div className={ classNameItem }>
        <figure className={ classNameFigure }>
          <a className={ classNamePicture } href='/items/MLSA-123'>
            <img src={ this.props.item.picture }/>
          </a>
        </figure>
        <section className={ classNameSection }>
          <h2>$ { this.props.item.price.amount }</h2>
        </section>
        <address>Capital Federal</address>
      </div>
    )
  }
}

ItemRow.propTypes = {
  item: PropTypes.object
}

export default ItemRow;
