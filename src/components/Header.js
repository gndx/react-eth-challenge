import React, { useContext } from 'react';
import { Context } from './Context';

export default function Header({ children }) {
  const { data } = useContext(Context);
  const fullName = data.name.split(' ');
  const name = fullName[0];
  const lastName = fullName[1];
  const background = data.background;

  return (
    <header className='header' style={{ 
      backgroundImage: `url(${background})`
    }}>
      <img className='avatar' alt='avatar' src={data.avatar} />
        <h1>
          {name}
          {' '}
          <span>{lastName}</span>
        </h1>
        <p>{data.user}</p>
    </header>
  );
}
