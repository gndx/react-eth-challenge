/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import getData from '../utils/getData';

// TODO: Fix test for this component

function Interest() {
  const [interest, setInterest] = useState([{}, {}, {}, {}]);

  useEffect(() => {
    getData('https://sergiogval.github.io/jsonapi/data.json')
      .then((data) => {
        setInterest(data.interest);
      });
  }, []);

  return (
    <div className='interest'>
      <h2 className='Interest-title'> Interests </h2>
      <ul className='Interest-items'>
        {interest.map((item, i) => {
          return (
            <li key={i} className='Interest-item'>{item.name}</li>
          );
        })}
      </ul>
    </div>

  );
}

export default Interest;
