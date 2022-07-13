import React, { useState, useEffect } from 'react';
import getData from '../utils/getData';

function Languages() {
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    getData('https://sergiogval.github.io/jsonapi/data.json')
      .then((data) => {
        setLanguages(data.languages);
      });
  }, []);

  return (
    <div className='languages'>
      <h2 className='Languages js-title'> Languages </h2>
      <ul className='Languages js-items'>
        {languages.map((item) => {
          return (
            <li className='Languages js-item' key={item.name}>
              {item.name}
              -
              {item.level}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Languages;
