import React from 'react';

import Logo from './../common/Logo';
import SearchBox from './../search-box/SearchBox';

import styleHeader from './Header.scss';

class Header extends React.Component {
  render() {
    return (
      <header className={ styleHeader.header } role="nav-header">
        <div>
          <Logo />
          <SearchBox />
        </div>
      </header>
    )
  }
}

export default Header;
