import React from 'react';

import style from './SearchBox.scss';

class SearchBox extends React.Component {

  searchItem(e) {
    e.preventDefault();
    alert('Holaa');
  }

  render() {
    return (
        <form className={ style.searchbox } onSubmit={ this.searchItem.bind(this) } role='form'>
          <input type="text" name="name" placeholder="Nunca dejes de buscar"/>
          <button type="submit" value="Submit">
            <i role="icon"></i>
          </button>
        </form>
    )
  }
}

export default SearchBox;
