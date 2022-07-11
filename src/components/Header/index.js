import React from 'react';
import { Anchor, Image, HeaderStyle } from './styles';
import About from '../About';

function Header({ data = {} }) {
  return (

    <HeaderStyle className='header' key='HeaderStyle'>
      <Anchor key='HeaderAnchor'>
        <Image
          alt='Avatar'
          src={data.avatar}
        />
      </Anchor>
      {' '}
      <h1 className='Header-title'>{data.name}</h1>
      <About data={data} />

    </HeaderStyle>

  );
};

export default Header;
