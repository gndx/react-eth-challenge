import React from 'react';
import '../styles/components/Skills.styl';


const Skills = (props) => {
  return (
    <div className='Skills'>
    <h1 className='Skills-title'>My Skills</h1>
    <div className='enum'>
      {
        props.DATOSS.map(elemento=>(
          <div className='Skills-item'><span className='skill-name'>{elemento.name}:</span><span className='skill-percentage'>{elemento.percentage}</span></div>
        ))
      }
      </div>
    </div>
  );
};

export default Skills;