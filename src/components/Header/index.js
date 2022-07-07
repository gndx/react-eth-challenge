import React from 'react';
import db from '../../../data.json';
import { Anchor, Image, HeaderStyle } from './styles';
import About from '../About';

function Header() {
  return (

    <HeaderStyle className='header' key='HeaderStyle'>
      <Anchor key='HeaderAnchor'>
        <Image
          alt='Avatar'
          src={db.data.avatar}
        />
      </Anchor>
      {' '}
      <h1 className='Header-title'>{db.data.name}</h1>
      <About />

    </HeaderStyle>

  );
};

export default Header;
