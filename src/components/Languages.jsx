import React from 'react';
import '../styles/components/Languages.styl';
import LanguagesItem from './items/LanguagesItem';

function Languages() {
  return (
    <section className='Languages'>
      <h2 className='Languages-title'>Languages</h2>
      <div className='Languages-items'>
        <LanguagesItem className='Languages-item' />
        <LanguagesItem className='Languages-item' />
        <LanguagesItem className='Languages-item' />
        <LanguagesItem className='Languages-item' />
      </div>
    </section>
  );
};

export default Languages;
