import React from 'react';
import ExperienceItem from './ExperienceItem';
import '../styles/components/Experience.styl';

function Experience({ experiences }) {
  return (
    <section className='Experience'>
      <div className='Experience-container General-container'>
        <h1 className='Experience-title General-title'>Experience title</h1>
        <div className='Experience-items'>
          {experiences &&
            experiences.map((exp) => (
              <article key={exp.company} className='Experience-item'>
                <ExperienceItem experience={exp} />
              </article>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
