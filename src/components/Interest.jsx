import React from 'react';
import '../styles/components/Interests.css';

function Interest({
  interest = Array(3).fill(''),
}) {
  return (
    <section className='Interests'>
      <h3 className='Interest-title'>
        Personal interests beyond web development
      </h3>
      <ul>
        {interest.map((item, index) => {
            return (
              <li key={index} className='Interest-item'>
                {item}
              </li>
            );
        })}
      </ul>
    </section>
  );
}

export default Interest;
