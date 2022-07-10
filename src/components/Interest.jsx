import React from 'react';
import '../styles/components/Interest.styl';

function Interest({ interests }) {
  return (
    <section className='Interest'>
      <h1 className='Interest-title General-title'>Interests</h1>
      <ul className='Interest-list'>
        {interests &&
          interests.map((item) => (
            <li key={item} className='Interest-item'>
              <span>{item}</span>
            </li>
          ))}
      </ul>
    </section>
  );
}

export default Interest;
