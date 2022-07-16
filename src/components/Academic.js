/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import getData from '../utils/getData';

function Academic() {
  const [academic, setAcademic] = useState([{}, {}]);

  useEffect(() => {
    getData('https://sergiogval.github.io/jsonapi/data.json')
      .then((data) => {
        setAcademic(data.academic);
      });
  }, []);
  return (
    <div className='academic'>
      <h2 className='Academic-title'> Academic </h2>
      <ul className='Academic-items'>
        {academic.map((item, i) => {
          return (
            <li className='Academic-item' key={i}>
              {item.degree}
              -
              {item.institution}
              -
              {item.startDate}
              -
              {item.endDate}
            </li>
          );
        })}
      </ul>

    </div>
  );
}

export default Academic;
