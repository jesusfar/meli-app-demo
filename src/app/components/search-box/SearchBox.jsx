import React from 'react';
import PropTypes from 'prop-types';
import style from './SearchBox.scss';

class SearchBox extends React.Component {

  render() {
    return (
        <form className={ style.searchbox } onSubmit={ this.props.onSearchSubmit } role='form'>
          <input type="text" name="name" placeholder="Nunca dejes de buscar"/>
          <button type="submit" value="Submit">
            <i role="icon"></i>
          </button>
        </form>
    )
  }
}

SearchBox.propTypes = {
  onSearchSubmit: PropTypes.func
}

export default SearchBox;
