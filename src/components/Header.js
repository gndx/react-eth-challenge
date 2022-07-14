import React, { useContext, useState } from 'react';
import { Context } from './Context';
import Nav from './Nav';

export default function Header({ children }) {
  const { data } = useContext(Context);
  const fullName = data.name.split(' ');
  const name = fullName[0];
  const lastName = fullName[1];
  const { background } = data;

  const [navVisible, setNavVisible] = useState(false);
  const toggleNav = () => {
    setNavVisible(!navVisible);
  };

  return (
    <header
      className='header'
      id='Home'
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <button type='button' onClick={toggleNav} className='mobile-nav-toggle' aria-controls='Main-nav' aria-expanded={navVisible}><span className='screenreader-only'>Menu</span></button>
      <Nav navVisible={navVisible} />
      <div className='header__content'>
        <img className='avatar' alt='avatar' src={data.avatar} />
        <h1>
          {name}
          {' '}
          <span>{lastName}</span>
        </h1>
        <p>{data.user}</p>
      </div>
    </header>
  );
}
