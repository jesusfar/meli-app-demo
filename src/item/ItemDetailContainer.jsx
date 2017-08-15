import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ItemDetail from './ItemDetail';
import { fetchItem } from './ItemActions';
import ResourceNotFound from './../app/components/common/ResourceNotFound';
import ServiceUnavailable from './../app/components/common/ServiceUnavailable';

class ItemDetailContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // I verify if query params are present
    if (this.props.match.params.itemId) {
      this.props.fetchItem(this.props.match.params.itemId);
    }
  }

  render() {
    let item = this.props.item;
    let error = this.props.error;

    if (item !== null) {
    return (
      <div>
        <ItemDetail item={ item } />
      </div>
    )
    } else if (error != null) {
      switch (error.code) {
        case 404:
          return (
            <div>
              <ResourceNotFound />
            </div>
          );
        default:
          return (
            <div>
              <ServiceUnavailable />
            </div>
          );
      }
    } else {
      return (
        <div>
        </div>
      )
    }
  }
}

ItemDetailContainer.propTypes = {
  item: PropTypes.object,
  error: PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    item: state.itemListReducer.item,
    error: state.itemListReducer.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchItem: (itemId) => dispatch(fetchItem(itemId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetailContainer);
