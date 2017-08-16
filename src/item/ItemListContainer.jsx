import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { push } from 'react-router-redux';

import ItemList from './ItemList';
import CategoryPath from './../category/CategoryPath';
import { searchItemsRequested } from './ItemActions';
import ServiceUnavailable from './../app/components/common/ServiceUnavailable';

class ItemListContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // I verify if query params are present
    if (this.props.location.search) {
      const queryParams = queryString.parse(this.props.location.search);
      // If search param is present I have to search item based on query
      if (queryParams.search) {
        this.props.searchItems(queryParams.search);
      }
    }
  }

  render() {
    if (this.props.error !== null) {
      return (
        <div>
          <ServiceUnavailable />
        </div>
      );
    } else {
      return (
        <div>
          <ItemList items={ this.props.items } onItemClick={ this.props.onItemClick } />
        </div>
      );
    }
  }
}

ItemListContainer.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  error: PropTypes.object,
  onItemClick: PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    items: state.itemListReducer.items,
    error: state.itemListReducer.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUri: (uri) => dispatch(push(uri)),
    searchItems: (searchText) => dispatch(searchItemsRequested(searchText))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemListContainer);
