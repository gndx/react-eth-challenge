import React from 'react';
import '../styles/components/Languages.styl';

const LEVEL_NAME = {
  A1: 'BASIC',
  B2: 'INTERMEDIATE',
  C3: 'NATIVE',
};
function getEnglishLevel(word) {
  const numberFromPercentage = Number(word.slice(0, -1));
  if (numberFromPercentage < 50) {
    return LEVEL_NAME.A1;
  }
  if (numberFromPercentage > 50) {
    return LEVEL_NAME.C3;
  }

  return LEVEL_NAME.B2;
}
function Languages({ languages }) {
  return (
    <section className='Languages'>
      <h1 className='Languages-title General-title'>Languages</h1>
      <ul className='Languages-list'>
        {languages &&
          languages.map(({ name, percentage }) => (
            <li className='Languages-item'>
              {name}
              {' - '}
              <span className='Languages-badge'>
                {getEnglishLevel(percentage)}
              </span>
            </li>
          ))}
      </ul>
    </section>
  );
}

export default Languages;
