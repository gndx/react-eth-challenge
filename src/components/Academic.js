import React from 'react';

function Academic() {
  return (
    <section>
      <h4 className='Academic-title'>Academic Studies</h4>
      <p>
        <span className='Academic-item'>
          B.A. Modern Languages -
          {' '}
          <span><em>Magna Cum Laude.</em></span>
          {' '}
        </span>
        <span className='Academic-item'>Universidad de Los Andes.</span>
        {' '}
        <span className='Academic-item'>Mérida, Venezuela</span>
      </p>
    </section>
  );
};

export default Academic;
