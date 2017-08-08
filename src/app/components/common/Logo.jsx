import React from 'react';

import logoStyle from './Logo.scss';

class Logo extends React.Component {
  render() {
    return (
      <a className={ logoStyle.logo } href="//www.mercadolibre.com" role="logo">
        Mercado Libre Argentina, encuentra lo que quieras.
      </a>
    )
  }
}

export default Logo;
