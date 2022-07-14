/* eslint-disable import/no-cycle */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { appContext } from '../containers/AppContext';

function Interest() {
  const { interest } = appContext();
  return (
    <section className='Interest'>
      <h2 className='Interest-title'>Interest</h2>
      {interest.map((item) => (
        <article className='Interest-item' key={item}>
          <span> {item}</span>
        </article>
      ))}
    </section>
  );
}

export default Interest;
