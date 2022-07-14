/* eslint-disable import/no-cycle */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { appContext } from '../containers/AppContext';

function Academic() {
  const { Academic } = appContext();
  return (
    <section className='Academic'>
      <h2 className='Academic-title'>Academic</h2>
      {Academic.map((item) => (
        <article className='Academic-item' key={item.degree}>
          <h4>{item.institution}</h4>
          <span>
            {item.degree} |{' '}
            <small>
              {item.startDate} - {item.endDate}
            </small>
          </span>
        </article>
      ))}
    </section>
  );
}

export default Academic;
