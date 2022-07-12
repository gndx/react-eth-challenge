import React, { useContext } from 'react';
import { Context } from './Context';

export default function Header({ children }) {
  const { data } = useContext(Context);
  const fullName = data.name.split(' ');
  const name = fullName[0];
  const lastName = fullName[1];

  return (
    <header>
      <img alt='myself' src={data.avatar} />
      <div className='header__content'>
        <p>
          CV
        </p>
        <h1>
          {name}
          {' '}
          <span>{lastName}</span>
        </h1>
        {children}
      </div>
    </header>
  );
}
