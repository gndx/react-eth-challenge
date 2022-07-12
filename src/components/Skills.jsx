import React from 'react';
import '../styles/components/Skill.styl';
import SkillItem from './items/SkilItem';

function Skills() {
  return (
    <section className='Skill'>
      <h2 className='Skills-title'>Skills</h2>
      <div className='Skill-items'>
        <SkillItem className='Skills-item' />
        <SkillItem className='Skills-item' />
        <SkillItem className='Skills-item' />
        <SkillItem className='Skills-item' />
      </div>
    </section>
  );
};

export default Skills;
