import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ItemDetail from './ItemDetail';
import { fetchItem } from './ItemActions';

class ItemDetailContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // I verify if query params are present
    if (this.props.match.params.itemId) {
      console.log('I have to fetch Item', this.props.match.params.itemId);
      this.props.fetchItem(this.props.match.params.itemId);
    }
  }

  render() {
    let item = this.props.item;
    if (item !== null) {
    return (
      <div>
        <ItemDetail item={ item } />
      </div>
    )
    } else {
      return (
        <div>
        </div>
      )
    }
  }
}

ItemDetailContainer.propTypes = {
  item: PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    item: state.itemListReducer.item
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchItem: (itemId) => dispatch(fetchItem(itemId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetailContainer);
