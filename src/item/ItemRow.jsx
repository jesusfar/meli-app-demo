import React from 'react';

import styleItemRow from './ItemRow.scss';

class ItemRow extends React.Component {

  render() {
    return (
      <item>
        <picture>
          <a href="#">
            <img src="https://http2.mlstatic.com/blu-studio-celulares-smartphones-D_Q_NP_745815-MLA25315600160_012017-X.webp"/>
          </a>
        </picture>
        <description>
          <h2>$ 150995 <address>Capital Federal</address></h2>
        </description>
      </item>
    )
  }
}

export default ItemRow;
