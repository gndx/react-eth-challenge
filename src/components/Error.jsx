import React from 'react';
import '../styles/components/Error.styl';

function Error({ code, message = 'Something was wrong' }) {
  return (
    <div className='Error'>
      <h1>
        Error
        {' '}
        {code}
      </h1>
      <p>{message}</p>
    </div>
  );
}

export default Error;
