import React from 'react';
import PropTypes from 'prop-types';

import Logo from './../common/Logo';
import SearchBox from './../search-box/SearchBox';

import styleHeader from './Header.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className={ styleHeader.header } role="nav-header">
        <div>
          <Logo />
          <SearchBox
            searchText={ this.props.searchText }
            onSearchTextInput={ this.props.onSearchTextInput }
            onSearchSubmit={ this.props.onSearchSubmit }
          />
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  searchText: PropTypes.string,
  onSearchTextInput: PropTypes.func,
  onSearchSubmit: PropTypes.func
}

export default Header;
