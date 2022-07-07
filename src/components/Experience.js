import React from 'react';
import ExperienceCard from './ExperienceCard';

export default function Experience({ exp = [{}, {}, {}] }) {
  return (
    <section className='Experience'>
      <div className='Experience-container'>
        <h2 className='Experience-title'>Experiencias laborales</h2>
        <ul>
          {exp[0].company && exp?.sort((a, b) => new Date(b.endDate) - new Date(a.endDate))?.map((item, index) => (
            <li key={`${item.company}`} className='Experience-item'>
              <ExperienceCard item={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
