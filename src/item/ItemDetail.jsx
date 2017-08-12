import React from 'react';
import PropTypes from 'prop-types';

import styleItemDetail from './ItemDetail.scss';

class ItemDetail extends React.Component {
  constructor(props) {
    console.log(props.itemId);
    super(props);
  }

  render() {
    //console.log(this.props.match.params.itemId);
    return (
      <div>
        Todo detail item
      </div>
    )
  }
}

ItemDetail.propTypes = {
  itemId: PropTypes.string
}

export default ItemDetail;
