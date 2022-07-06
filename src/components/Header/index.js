import React from 'react';
import db from '../../../data.json';
import { Anchor, Image } from './styles';

export default function Header() {
  return (
    <article>
      <Anchor>
        <Image
          alt='Avatar'
          src={db.data.avatar}
        />
      </Anchor>

      <h1>{db.data.name}</h1>
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
    </article>
  );
};
