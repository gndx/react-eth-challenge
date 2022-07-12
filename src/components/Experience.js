import React, { useContext } from 'react';
import { Context } from './Context';
import ExperienceItem from './ExperienceItem';

export default function Experience() {
  const { data } = useContext(Context);

  return (
    <section className='experience'>
      <div className='container'>  
        <h2>Experience</h2>
        {data.experience.map((item) => (
          <ExperienceItem
          key={item.company}
          company={item.company}
          endDate={item.endDate}
          startDate={item.startDate}
          jobDescription={item.jobDescription}
          jobTitle={item.jobTitle}
          />
          ))}
      </div>
    </section>
  );
}
