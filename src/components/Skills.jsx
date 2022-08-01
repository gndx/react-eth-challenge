import React from 'react';

function Skills(props) {
  const { skills = new Array(3).fill({
    name: 'No skills yet',
    percentage: '0%',
  }) } = props;
  return (
    <section className='Skills'>
      <h2 className='Skills-title'>Skills</h2>
      <article className='Skills-items'>
        {skills.map((item, index) => (
          <div className='Skills-item' key={`skill-item-${index}`}>
            {item.name}
          </div>
        ))}
      </article>
    </section>
  );
}

export default Skills;
