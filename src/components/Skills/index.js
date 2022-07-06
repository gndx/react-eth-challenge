import React from 'react';
import { FiChevronsRight } from 'react-icons/fi';
import { ProgressBar } from 'react-bootstrap';
import db from '../../../data.json';
import { Text, SkillsStyle, Item, SkillsItemTitle } from './styles';
import 'bootstrap/dist/css/bootstrap.min.css';

function Skills() {
  return (

    <SkillsStyle className='skills'>
      <Text>
        {' '}
        <h2 className='Skills-title'>Skills</h2>
        {db.data.skills.map((skills) => (
          <>
            <Item key={skills.id}>
              <div className='Skills-item'>

                <SkillsItemTitle>
                  <FiChevronsRight size='26px' />
                  {skills.name}
                </SkillsItemTitle>

                {' '}

              </div>
              {' '}
            </Item>
            <div className='progressBar'>
              <ProgressBar now={skills.percentage} label={`${skills.percentage}% completed`} />
            </div>
          </>
        ))}

      </Text>

    </SkillsStyle>

  );
};

export default Skills;
