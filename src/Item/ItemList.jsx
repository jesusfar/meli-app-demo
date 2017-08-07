import React from 'react';

import ItemRow from './ItemRow';
import styleItemList from './ItemList.scss';

class ItemList extends React.Component {

  render() {
    return (
      <ol>
        <li>
          <ItemRow />
        </li>
        <li>
          <ItemRow />
        </li>
      </ol>
    )
  }
}

export default ItemList;
