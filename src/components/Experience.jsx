import React from 'react';
import '../styles/components/App.styl';

const Experience = ({ experience }) => {

  const experiences = Array.from(new Set(experience));

  return (
    <div className='Experience'>
      <h2 className='Experience-title subtitle'>Experience</h2>
      {
        experiences.map((item) => {
          return (
            <div className='Experience-item' key={item.company}>
              <div className='colorblue'>
                {item.jobTitle}
              </div>
              <div>
                {item.company}
              </div>
              <div>
                {`${item.startDate} - ${item.endDate}`}
              </div>
              <div>
                {item.jobDescription}
              </div>
            </div>
          );
        })
      }
    </div>
  );
};

export default Experience;
