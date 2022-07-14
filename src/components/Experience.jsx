/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-empty-pattern */
/* eslint-disable jsx-quotes */
/* eslint-disable import/no-cycle */
import React from 'react';
import { appContext } from '../containers/AppContext';

function Experience() {
  const { experience } = appContext();

  return (
    <section className='Experience'>
      <h2 className='Experience-title'>Experience</h2>
      {experience.map((item) => (
        <article className='Experience-item' key={item.company}>
          <h4>{item.jobTitle}</h4>
          <span>
            <b>{item.company}</b> | <small>{item.startDate} - {item.endDate}</small>
          </span>
          <p>
            {item.jobDescription}
          </p>
        </article>
      ))}
    </section>
  );
}

export default Experience;
