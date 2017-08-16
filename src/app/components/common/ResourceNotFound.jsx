import  React from 'react';

import style from './HttpError.scss';

class ResourceNotFound extends React.Component {

  render() {
    return (
      <div className= { style.error }>
        <h1>Resource not found. <small>Error 404</small></h1>
        <p>
        Oh no!, sorry.. the resource could not be found, try again in the future.
        </p>
      </div>
    );
  }
}

export default ResourceNotFound;
