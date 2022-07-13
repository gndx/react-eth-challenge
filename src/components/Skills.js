import React, { useState, useEffect } from 'react';
import getData from '../utils/getData';

function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    getData('https://sergiogval.github.io/jsonapi/data.json')
      .then((data) => {
        setSkills(data.skills);
      });
  }, []);
  return (
    <div className='skills'>
      <h2 className='Skills-title'> Skills </h2>
      <ul className='Skills-items'>
        {skills.map((item) => {
          return (
            <li className='Skills-item' key={item.name}>
              {item.name}
              -
              {item.percentage}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Skills;
