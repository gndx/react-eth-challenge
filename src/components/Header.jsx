import React from 'react';
import '../styles/components/Header.styl';

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
      <img src={avatar} alt='Profile pic' className='Avatar' />
      <article>
        <h1 className='Header-title'>{name}</h1>
        {children}
        <ul className='Social'>
          {
            social.map(({ name: network, url }, index) => (
              <li key={`social-${index}`}>
                <a href={url} target='_blank' rel='noopener noreferrer'>
                  <i className={`fa fa-${network}`} />
                </a>
              </li>
            ))
          }
        </ul>
      </article>
    </header>
  );
}

export default Header;
