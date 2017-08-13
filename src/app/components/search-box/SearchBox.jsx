import React from 'react';
import PropTypes from 'prop-types';

import style from './SearchBox.scss';

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSearchTextInputChange(e) {
    this.props.onSearchTextInput(e.target.value);
  }

  handleOnSearchSubmit(e) {
    e.preventDefault();
    this.props.onSearchSubmit(e);
  }

  render() {
    return (
        <form className={ style.searchbox } onSubmit={ this.handleOnSearchSubmit.bind(this) } role='form'>
          <input
            type="text"
            placeholder="Nunca dejes de buscar"
            value= { this.props.searchText }
            onChange={ this.handleSearchTextInputChange.bind(this) }
          />
          <button type="submit" value="Submit">
            <i role="icon"></i>
          </button>
        </form>
    )
  }
}

SearchBox.propTypes = {
  searchText: PropTypes.string,
  onSearchTextInput: PropTypes.func,
  onSearchSubmit: PropTypes.func
}

export default SearchBox;
