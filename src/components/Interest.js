import React, { useEffect, useState } from 'react';
import getData from '../utils/getData';

// TODO: Fix test for this component

function Interest() {
  const [interest, setInterest] = useState([]);

  useEffect(() => {
    getData('https://sergiogval.github.io/jsonapi/data.json')
      .then((data) => {
        setInterest(data.interest);
      });
  }, []);

  return (
    <div className='interests'>
      <h2 className='Interest-title'> Interests </h2>
      <ul className='Interest-items'>
        {interest.map((item) => {
          return (
            <li className='Interest-item' key={item}>{item}</li>
          );
        })}
      </ul>
    </div>
  );
}

export default Interest;
