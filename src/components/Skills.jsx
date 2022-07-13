import React from 'react';
import '../styles/components/Skill.styl';
import SkillItem from './items/SkilItem';
import CompleteData from '../../data.json';

function Skills() {
  const { data } = CompleteData;
  return (
    <section className='Skill'>
      <h2 className='Skills-title'>Skills</h2>
      <div className='Skill-items'>
        {data.skills.map((item, index) => <SkillItem className='Skills-item' key={`${index + 1}-skill`} item={item} />)}
      </div>
    </section>
  );
};

export default Skills;
