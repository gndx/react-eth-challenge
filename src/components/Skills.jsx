<<<<<<< HEAD
import React from 'react'

const Skills = () => {
  return (
    <>
    
    </>
  )
}

export default Skills
=======
import React from 'react';
import '../styles/components/Skills.styl';

function Skills({ skills = [{}, {}, {}] }) {
  return (
    <section className='Skills-section'>
      <h2 className='Skills-title'>Skills</h2>
      {skills?.map((elem, index) => (
        <section key={index} className='Skills-grid'>
          <p className='Skills-item'>{elem.name}</p>
          <progress max='100' value={elem.percentage} className='Skills-item'>{elem.percentage}</progress>
        </section>
      ))}
    </section>
  );
}

export default Skills;
>>>>>>> test
