import React from 'react';
import { FiChevronsRight } from 'react-icons/fi';
import { SkillsStyle, Item, SkillsItemTitle } from './styles';

function Skills({ data = {} }) {
  return (

    <SkillsStyle className='skills' key='SkillsStyle'>

      {' '}
      <h2 className='Skills-title'>Skills</h2>
      {data.skills.map((skills) => (
        <Item key={skills.name} className='Skills-item'>

          <SkillsItemTitle>
            <FiChevronsRight size='26px' />
            {skills.name}
          </SkillsItemTitle>
          <div style={{ border: '4px solid #2b3739', borderRadius: '15px', width: '300px' }}>
            <div style={{ height: '24px', width: skills.percentage, backgroundColor: '#e3b3ab', borderRadius: '15px' }} />
          </div>

        </Item>
      ))}

    </SkillsStyle>

  );
};

export default Skills;
