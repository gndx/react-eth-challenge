import React from 'react';
import '../styles/components/Experience.styl';

const Experience = function ({ data }) {
  return (
    <div className='Experience'>
      <h2 className='Experience-title'>Experience</h2>
      <hr />
      <ul>
        {
          data ?
            data.map((experience, index) => {
              return (
                <li key={index} className='Experience-item'>
                  <h3>
                    <span className='Job-title'>
                      {experience.jobTitle}
                    </span>
                    |
                    <span className='Job-dates'>
                      {`${experience.startDate} - ${experience.endDate}`}
                    </span>
                  </h3>
                  <p className='Company'>{experience.company}</p>
                  <p>{experience.jobDescription}</p>
                </li>
              );
            }) : <>Cargando data...</>
        }
      </ul>
    </div>
  );
};

export default Experience;
