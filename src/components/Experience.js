import React from 'react';
import '../styles/components/Experience.styl';

const Experience = ({ experience = [0, 1, 2] }) => {
  return (
    <section className='Experience'>
      <div className='Experience-title'>👷 Experience </div>
      <div className='Experience-container-items'>
        {experience?.map((item, index) => (
          <div key={index} className='Experience-item'>
            <div className='Experience-company'>◼ {item.company}</div>
            <div className='Experience-date'>
              <div className='Experience-endDate'>{item.endDate}-</div>
              <div className='Experience-startDate'>{item.startDate}</div>
            </div>
            <div className='Experience-jobDescription'>
              {item.jobDescription}
            </div>
            <div className='Experience-jobTitle'>
              {item.jobTitle}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Experience;
