import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';

const Skills = () => {
  const data = useContext(AppContext);
  const initalContent = data.skills ? data.skills : [0, 1, 2];
  return (
    <section className='Skills'>
      <h1 className='Skills-title'>Skills</h1>
      <div className='Skills-container'>
      {initalContent.map((item, index) => (
          <div key={index} className="Skills-item">
            {data.skills && item.name}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills