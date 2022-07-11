import React from 'react';

const Experience = ({ experience }) => {
  return (
    <div className="experience-container">
      <h1 className="Experience-title">Experience</h1>
      <div className="experience-container-items">
        {experience ? experience.map((items) => (
          <div className='single-item' key={`${items.startDate}-${items.company}`}>
            <h2 className='Experience-item'>{items.company}</h2>
            <h4 className='Experience-item'>{items.jobTitle}</h4>
            <div className='Experience-item'>{items.jobDescription}</div>
            <div className='Experience-item'>
              {items.startDate}
              {' '}
              -
              {' '}
              {items.endDate}
            </div>
          </div>
        )) : ''}
      </div>
    </div>
  );
};

export default Experience;
