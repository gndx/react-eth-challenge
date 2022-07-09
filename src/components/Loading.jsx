import React from 'react';
import '../styles/components/Loading.styl';

function Loading() {
  return (
    <div className='lds-ring'>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
}

export default Loading;
