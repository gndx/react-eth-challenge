/* eslint-disable import/no-cycle */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { appContext } from '../containers/AppContext';

function Languages() {
  const { languages } = appContext();
  return (
    <section className='Languages'>
      <h2 className='Languages-title'>Languages</h2>
      {languages.map((item) => (
        <article className='Languages-item' key={item.name}>
          <span> {item.name} - {item.percentage} </span>
        </article>
      ))}
    </section>
  );
}

export default Languages;
