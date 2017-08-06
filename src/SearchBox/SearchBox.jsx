import React from 'react';

import style from './SearchBox.scss';

class SearchBox extends React.Component {
  render() {
    return (
        <form className={ style.searchbox }>
          <input type="text" name="name" />
          <button type="submit" value="Submit">
            <i role="icon"></i>
          </button>
        </form>
    )
  }
}

export default SearchBox;
