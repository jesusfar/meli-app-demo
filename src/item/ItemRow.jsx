import React from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { IntlProvider, FormattedNumber } from 'react-intl';

import styleItem from './ItemRow.scss';

let cx = classNames.bind(styleItem);

class ItemRow extends React.Component {

  handleOnItemClick(e) {
    e.preventDefault();
    this.props.onItemClick(this.props.item.id);
  }

  render() {
    let classNameItemRow = cx('row', 'item-row');
    let classNameFigure = cx('col-md-2', 'item-picture');
    let classNameShortDescription = cx('col-md-6', 'col-xs-12', 'col-sm-10' ,'item-short-description');
    let classNameClickeable = cx('item-clickeable');

    let item = this.props.item;

    return (
      <a className={ classNameClickeable } href={ `/items/${item.id}` } onClick={ this.handleOnItemClick.bind(this) }>
      <div className={ classNameItemRow }>
        <figure className={ classNameFigure }>
            <img src={ item.picture }/>
        </figure>
        <section className={ classNameShortDescription }>
            <h4>
              <FormattedNumber value={ item.price.amount } style="currency" currency={ item.price.currency } />
            </h4>
          <p>
            { item.title }
          </p>
        </section>
        <address>Capital Federal</address>
      </div>
      </a>
    )
  }
}

ItemRow.propTypes = {
  item: PropTypes.object,
  onItemClick: PropTypes.func
}

export default ItemRow;
