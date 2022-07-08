import React from 'react';
import '../styles/components/Experience.styl';
import Item from './Item';

function Experience({
  experience = Array(3).fill({
    company: '',
    endDate: '',
    jobDescription: '',
    jobTitle: '',
    startDate: '',
  }),
}) {
  return (
    <section className='Experience'>
      <h2 className='Experience-title'>Experience</h2>
      <div className='container'>
        {
          experience.map(({
            company,
            endDate,
            jobDescription,
            jobTitle,
            startDate,
          }, index) => (
            <Item
              className='Experience-item'
              title={company}
              sub={jobTitle}
              description={jobDescription}
              date={`${startDate}-${endDate}`}
              key={`experience-${index}`}
            />
          ))
        }
      </div>
    </section>
  );
}

export default Experience;
