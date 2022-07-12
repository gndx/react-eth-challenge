import React from 'react';
import data from '../../../data.json';

import '../../styles/components/Experience.styl';

function Experience() {
  return (
    <div className='Experience'>
      <h2 className='Experience-title'>
        Experience
      </h2>
      <div className='Experience-data'>
        {data && data.data.experience.map(
          (item) => (
            <div key={item.company} className='Experience-item'>
              <h3>{item.company}</h3>
              {' '}
              <h4>{ item.jobTitle }</h4>
              {' '}
              <div>
                (
                {item.startDate}
                {' '}
                -
                {item.endDate}
                )
              </div>
              <div>
                {item.jobDescription}
                {' '}
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
}

export default Experience;
