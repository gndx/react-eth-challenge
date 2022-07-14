import React, { useContext } from 'react';
import { Context } from './Context';

export default function Contact() {
  const { data } = useContext(Context);

  return (
    <article className='contact'>
      <ul>
        <li>
          <span>address: </span>
          {data.address}
        </li>
        <li>
          <span>email: </span>
          {data.email}
        </li>
        <li>
          <span>website: </span>
          {data.website}
        </li>
        <li>
          <span>phone: </span>
          {data.phone}
        </li>
      </ul>
    </article>
  );
}
