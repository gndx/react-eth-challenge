import React from 'react';
import '../styles/components/Languages.styl';
import LanguagesItem from './items/LanguagesItem';
import CompleteData from '../../data.json';

function Languages() {
  const { data } = CompleteData;
  return (
    <section className='Languages'>
      <h2 className='Languages-title'>Languages</h2>
      <div className='Languages-items'>
        {data.languages.map((item, index) => <LanguagesItem className='Languages-item' key={`${index + 1}-language`} item={item} />)}
        <span className='Languages-item' />
      </div>
    </section>
  );
};

export default Languages;
