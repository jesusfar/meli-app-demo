import React from 'react';
import PropTypes from 'prop-types';

import Main from './components/main/Main';

const app = ({ children }) => (
  <div>
    <Main role='main'>
      {children}
    </Main>
  </div>
)

app.propTypes = {
  children: PropTypes.node
}

export default app;
