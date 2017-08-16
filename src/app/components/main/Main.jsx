import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';

import Home from './../home/Home';
import Header from './../header/Header';
import ItemListContainer from './../../../item/ItemListContainer';
import ItemDetailContainer from './../../../item/ItemDetailContainer';
import CategoryPath from './../../../category/CategoryPath';
import styleApp from './../../styles/_App.scss';

import { searchItemsRequested, fetchItem } from './../../../item/ItemActions';

class Main extends React.Component {
  constructor(props) {
    super(props);

    //Initial state searchText
    this.state = {
      searchText: ''
    }
  }

  handleSearchTextInput(searchText) {
    this.setState({
      searchText: searchText
    });
  }

  handleOnSearchSubmit(e) {
    e.preventDefault();

    if (this.state.searchText) {
      this.props.setUri('/items?search=' + this.state.searchText);
      this.props.searchItems(this.state.searchText);
    }
  }

  handleOnItemClick(itemId) {
    this.props.setUri('/items/' + itemId);
    this.props.fetchItem(itemId);
  }

  render() {
    return (
      <div>
        <Header
          searchText={ this.state.searchText }
          onSearchTextInput={ this.handleSearchTextInput.bind(this) }
          onSearchSubmit={ this.handleOnSearchSubmit.bind(this) }
        />
        <div className={ styleApp.main } >
          <CategoryPath categories={ this.props.categories } />
          <Route exact path='/' component={ Home }/>
          <Route exact path='/items' render={ (props) =>
            <ItemListContainer
              items={ this.props.items }
              onItemClick={ this.handleOnItemClick.bind(this) }
              {...props}
            />
          }/>
          <Route exact path='/items/:itemId' render={ (props) =>
            <ItemDetailContainer
              item={ this.props.item } {...props}
            />
          }/>
        </div>
      </div>
    );
  }
}

Main.propTypes = {
  setUri: PropTypes.func,
  searchItems: PropTypes.func,
  items: PropTypes.arrayOf(PropTypes.object),
  item: PropTypes.object,
  categories: PropTypes.arrayOf(PropTypes.string)
}

const mapStateToProps = (state) => {
  return {
    items: state.itemListReducer.items,
    categories: state.itemListReducer.categories,
    item: state.itemListReducer.item
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUri: (uri) => dispatch(push(uri)),
    searchItems: (searchText) => dispatch(searchItemsRequested(searchText)),
    fetchItem: (itemId) => dispatch(fetchItem(itemId))
  }
}

const MainConnected = connect(mapStateToProps, mapDispatchToProps)(Main);
export default MainConnected;
