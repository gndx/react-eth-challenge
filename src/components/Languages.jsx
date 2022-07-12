import React from 'react';

function Languages({
  languages = Array(3).fill({ name: '', percentage: '' }),
}) {
  return (
    <section>
      <h2 className='Languages-title'>Languages</h2>
      <div className='Languages-container'>
      {languages.map(({ name, percentage }, index) => (
          <div className='Languages-item' key={`language-${index}`}>
            <h3>{name}</h3>
            <progress max='100' value={percentage.split('%')[0]} />
          </div>
        ))
      }
      </div>
    </section>
  );
}

export default Languages;
