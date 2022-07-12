import React from 'react';

export default function Header({ children }) {
  return (
    <header>
      <img alt='myself' />
      <div className='header__content'>
        <p>
          CV
          <span>@bramucci</span>
        </p>
        <h1>
          Candela
          {' '}
          <span>Bramucci</span>
        </h1>
        {children}
      </div>
    </header>
  );
}
