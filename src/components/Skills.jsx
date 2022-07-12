import React from 'react';
import '../styles/components/Skills.css';

const Skills = (props) => {
    return (
      <section className='Skills'>
        <h1 className='Skills-title'>Skills</h1>
        <div className='Skills-items'>
        {props.data?.skills.map((skill) => (
          <card className='Skills-item' key={skill.name}>
            <h3>{skill.name}</h3>
            <h4>{skill.percentage}</h4>
        </card>
        ))}
        </div>
      </section>
    )
  };
  
  export default Skills;
  