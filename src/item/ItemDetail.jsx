import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import {IntlProvider, FormattedNumber} from 'react-intl';

import styleItemDetail from './ItemDetail.scss';

let cx = classNames.bind(styleItemDetail);

class ItemDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let item = this.props.item;

    let classNameRow = cx('row');
    let classNameItemDetailContainer = cx('item-details-container', 'col-offset-md-1', 'col-md-10', 'col-sm-12', 'col-xs-12');
    let classNameItemPicture = cx('item-picture', 'col-md-7');
    let classNameShortDescription = cx('item-short-description', 'col-md-3');
    let classNameItemConditions = cx('item-conditions');
    let classNameItemTitle = cx('item-title');
    let classNameItemPrice = cx('item-price');
    let classNameBuyButton = cx('buy-action-button');
    let classNameItemDescription = cx('item-description');
    return (
      <div className={ classNameRow }>
        <div className={ classNameItemDetailContainer }>
          <section className={ classNameRow }>
            <figure className={ classNameItemPicture }>
              <img src={ item.picture } />
            </figure>
            <section className={ classNameShortDescription }>
              <div className={ classNameItemConditions }>
                { item.condition } - { item.sold_quantity } vendidos
              </div>
              <div className={ classNameItemTitle }>
                { item.title }
              </div>
              <div className={ classNameItemPrice }>
                <FormattedNumber value={ item.price.amount } style="currency" currency={ item.price.currency } />
              </div>
              <div>
                <button className={ classNameBuyButton } type="submit">
                  Comprar
                </button>
              </div>
            </section>
          </section>
          <section className={ classNameRow } >
            <div className={ classNameItemDescription }>
              <h2> Descripción del producto</h2>
              <p>
              {item.description}
              </p>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

ItemDetail.propTypes = {
  item: PropTypes.object
}

export default ItemDetail;
