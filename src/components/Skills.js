import React from 'react';
import '../styles/components/Skills.styl';

const Skills = ({ skills = [0, 1, 2] }) => {
  return (
    <div className='Skills'>
      <div className='Skills-title'>🛠 Skills</div>
      <div className='Skills-container-items'>
        {
          skills?.map((item, index) => <div key={index} className='Skills-item'>{item.name}</div>)
        }
      </div>
    </div>
  );
};

export default Skills;
