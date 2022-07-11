import React from 'react';
import '../styles/components/Header.css';

function Header({
  social = Array(3).fill({
    name: '',
    url: '',
  }),
  name,
  avatar,
  children,
}) {
  return (
    <header>
      <img src={avatar} alt='Profile pic'/>
      <div className='AboutContainer'>
        <h1 className='Header-title'>{name}</h1>
        {children}
        <ul className='Social'>
          {social.map(({ name, url }, index) => (
              <li key={index}>
                <a href={url} target='_blank' rel='noopener noreferrer'>
                  {name}
                </a>
              </li>
            ))
          }
        </ul>
      </div>
    </header>
  );
}

export default Header;