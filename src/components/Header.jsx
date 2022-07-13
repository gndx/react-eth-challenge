import React from 'react';
import '../styles/components/Header.styl';
import CompleteData from '../../data.json';

function Header({ children }) {
  const { data } = CompleteData;
  console.log(data.avatar);

  return (
    <header>
      <div className='Header__image--container'>
        <img className='Header__image' src={data.avatar} alt='profile-img' />
      </div>
      <div className='Header-data'>
        <h1 className='Header-title'>{data.name}</h1>
        {children}
      </div>

    </header>
  );
};

export default Header;
