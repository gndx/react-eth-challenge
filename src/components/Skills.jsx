import React from 'react';
import SkillsItem from './SkillsItem';
import '../styles/components/Skills.styl';

function Skills({ skills }) {
  return (
    <section className='Skills'>
      <h1 className='Skills-title General-title'>Skills title</h1>
      {skills &&
        skills.map((skill) => (
          <article key={skill.name} className='Skills-item'>
            <SkillsItem skill={skill} />
          </article>
        ))}
      <i className='Skills-item'></i>
      <i className='Skills-item'></i>
      <i className='Skills-item'></i>
    </section>
  );
}

export default Skills;
