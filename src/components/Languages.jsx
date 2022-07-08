import React from 'react';
import db from '../../data.json';
import LanguagesCard from './LanguagesCard';

const Languages = () => {
  return (
    <div className='languages'>
    <h2 className='Languages-title'>Languages</h2>
    <ul >
      {db.data.languages.map((lan) => (
        <LanguagesCard key={lan.name} className='Languages-item' {...lan}/>
      ))}
    </ul>
    </div>
  )

}

export default Languages;