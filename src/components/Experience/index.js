import React from 'react';
import { FiChevronsRight, FiMinus } from 'react-icons/fi';
import { GoCalendar } from 'react-icons/go';
import { ExperienceStyle, Item, ExperienceItemTitle, ExperienceItemDate } from './styles';

function Experience({ data = {} }) {
  return (

    <ExperienceStyle className='experience' key='ExperienceStyle'>

      {' '}
      <h2 className='Experience-title'>Experience</h2>
      {data.experience.map((experience) => (
        <Item key={experience.jobTitle} className='Experience-item'>

          <ExperienceItemTitle>
            <FiChevronsRight size='26px' />
            {experience.jobTitle}
            {' '}
            <FiMinus size='13px' />
            {' '}
            {experience.company}
          </ExperienceItemTitle>
          <ExperienceItemDate>
            <GoCalendar size='14px' />
            {' '}
            {experience.startDate}
            {' '}
            <FiMinus size='12px' />
            {' '}
            {experience.endDate}

          </ExperienceItemDate>
          <p>
            {' '}
            {experience.jobDescription}

          </p>

        </Item>
      ))}

    </ExperienceStyle>

  );
};

export default Experience;
