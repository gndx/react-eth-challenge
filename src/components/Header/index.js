import React from 'react';
import db from '../../../data.json';
import { Anchor, Image, Text, HeaderStyle } from './styles';

function Header() {
  return (

    <HeaderStyle className='header'>
      <Anchor>
        <Image
          alt='Avatar'
          src={db.data.avatar}
        />
      </Anchor>
      <Text>
        {' '}
        <h1 className='Header-title'>{db.data.name}</h1>
        Profession:
        {' '}
        {db.data.profession}
        <br />
        Phone:
        {' '}
        {db.data.phone}
        {' '}
        Email:
        {' '}
        {db.data.email}
        {' '}
        Website:
        {' '}
        {db.data.website}
        <br />
        Address:
        {' '}
        {db.data.address}

      </Text>

    </HeaderStyle>

  );
};

export default Header;
