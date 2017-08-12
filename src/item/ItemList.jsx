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
    return (
      <section>
        {this.props.items.map(item => (
          <ItemRow key={ item.id } item={item} />
        ))}
      </section>
    )
  }
}

ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
}

export default ItemList;
