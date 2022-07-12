import React from 'react';
import '../styles/components/Languages.styl';

function Languages({ languages = [{}, {}, {}] }) {
  return (
    <section className='Languages-section'>
      <h2 className='Languages-title'>Languages</h2>
      {languages?.map((elem, index) => (
        <section className='Languages-grid' key={index}>
          <p className='Languages-item'>
            {elem.name}
          </p>
          <progress max='100' value={elem.percentage} className='Languages-item'>
            {elem.percentage}
          </progress>
        </section>
      ))}
    </section>
  );
}

export default Languages;
