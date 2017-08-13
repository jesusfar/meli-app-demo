import React from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styleItem from './ItemRow.scss';

let cx = classNames.bind(styleItem);

class ItemRow extends React.Component {

  render() {
    let classNameItem = cx('row');
    let classNameFigure = cx('col-md-2', 'col-offset-md-1');
    let classNameShortDescription = cx('col-md-6', 'item-short-description');
    let classNamePicture = cx('item-picture');

    let item = this.props.item;

    return (
      <div className={ classNameItem }>
        <figure className={ classNameFigure }>
          <a className={ classNamePicture } href={ `/items/${item.id}` }>
            <img src={ item.picture }/>
          </a>
        </figure>
        <section className={ classNameShortDescription }>
          <h2>$ { item.price.amount }</h2>
          <p>
            { item.title }
          </p>
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
