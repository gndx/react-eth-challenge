import React from 'react';

function Languages({
  languages = Array(3).fill({ name: '', percentage: '' }),
}) {
  return (
    <section className='languages-section'>
      <h3 className='Languages-title'>
        Languages
      </h3>
      <div className='Languages-container'>
      {languages.map(({ name, percentage }, index) => (
          <div className='Languages-item' key={`language-${index}`}>
            <h4>
              {name}
            </h4>
            <progress max='100' value={percentage.split('%')[0]} />
          </div>
        ))
      }
      </div>
    </section>
  );
}

export default Languages;
