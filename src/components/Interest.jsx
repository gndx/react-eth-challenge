import React from 'react';

function Interest(props) {
  const { interest = new Array(3).fill('No interests submitted') } = props;
  return (
    <section className='Interest'>
      <h2 className='Interest-title'>Interests</h2>
      <ul className='Interest-items'>
        {interest.map((item, index) => (
          <li key={`interes-item-${index}`} className='Interest-item'>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Interest;
