import React from 'react';
import '../styles/components/Skills.scss';

function Skills(props) {
  const { skills } = props;
  return (
    <section>
      <h2 className='Skills-title'>Skills</h2>
      <div className='skill-box'>
        {skills.map((skill, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div className='Skills-item' key={index}>
            <h3>
              {skill.name}
            </h3>

            <div
              className='skill-indicator'
              style={{ width: skill.percentage }}
            >
              {skill.percentage}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
