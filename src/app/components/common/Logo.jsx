import React from 'react';

import logoStyle from './Logo.scss';

class Logo extends React.Component {
  render() {
    return (
      <a className={ logoStyle.logo } href="/" role="logo">
        Mercado Libre Argentina, encuentra lo que quieras.
      </a>
    )
  }
}

export default Logo;
