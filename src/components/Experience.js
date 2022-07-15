/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import getData from '../utils/getData';

// TODO: Fix test for this component

function Experience() {
  const [experience, setExperience] = useState([{}, {}]);

  useEffect(() => {
    getData('https://sergiogval.github.io/jsonapi/data.json')
      .then((data) => {
        setExperience(data.experience);
      });
  }, []);

  return (
    <div className='experience'>
      <h2 className='Experience-title'> Experience </h2>
      <ul>
        {experience.map((item, i) => {
          return (
            <li className='Experience-item' key={i}>
              <h3>
                {item.jobTitle}
              </h3>
              <p>
                {item.company}
              </p>
              <p>
                {item.jobDescription}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Experience;
