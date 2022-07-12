import React, { useContext } from 'react';
import { Context } from './Context';

export default function Profile() {
  const { data } = useContext(Context);

  return (
    <section className='profile'>
      <h2>Profile</h2>
      <p>{data.Profile}</p>
    </section>
  );
}
