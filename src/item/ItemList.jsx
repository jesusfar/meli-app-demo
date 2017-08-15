import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import ItemRow from './ItemRow';
import styleItemList from './ItemList.scss';

let cx = classNames.bind(styleItemList);

class ItemList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let classNameSection = cx('row');
    let classNameItemsContainer = cx('item-row-container', 'col-offset-md-1', 'col-md-10', 'col-sm-12', 'col-xs-12')
    return (
      <section className={ classNameSection }>
        <div className={ classNameItemsContainer }>
          {this.props.items.map(item => (
              <ItemRow key={ item.id } item={ item } onItemClick={ this.props.onItemClick }/>
          ))}
        </div>
      </section>
    )
  }
}

ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  onItemClick: PropTypes.func
}

export default ItemList;
