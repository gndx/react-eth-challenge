/* eslint-disable import/no-cycle */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { appContext } from '../containers/AppContext';

function Skills() {
  const { skills } = appContext();
  return (
    <section className='Skills'>
      <h2 className='Skills-title'>Skills</h2>
      {skills.map((item) => (
        <article className='Skills-item' key={item.name}>
          <span> {item.name} - {item.percentage} </span>
        </article>
      ))}
    </section>
  );
}

export default Skills;
