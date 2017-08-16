import  React from 'react';

import style from './HttpError.scss';

class ServiceUnavailable extends React.Component {

  render() {
    return (
      <div className= { style.error }>
        <h1>Service unavaliable</h1>
        <p>
        Oh no! it seems, that our service is unavaliable.
        Please try to run the meli-api-demo first.
        </p>
      </div>
    );
  }
}

export default ServiceUnavailable;
