import React from 'react';
import { FiChevronsRight, FiMinus } from 'react-icons/fi';
import { GoCalendar } from 'react-icons/go';
import db from '../../../data.json';
import { Text, AcademicStyle, Item, AcademicItemTitle, AcademicItemDate } from './styles';

function Academic() {
  return (

    <AcademicStyle className='academic'>
      <Text>
        {' '}
        <h2 className='Academic-title'>Academic</h2>
        {db.data.academic.map((academic) => (
          <Item key={academic.id}>
            <div className='Academic-item'>

              <AcademicItemTitle>
                <FiChevronsRight size='26px' />
                {academic.degree}
                {' '}
                <FiMinus size='13px' />
                {' '}
                {academic.institution}
              </AcademicItemTitle>
              <AcademicItemDate>
                <GoCalendar size='14px' />
                {' '}
                {academic.startDate}
                {' '}
                <FiMinus size='12px' />
                {' '}
                {academic.endDate}

              </AcademicItemDate>
              {' '}
              {academic.jobDescription}
            </div>
            {' '}
          </Item>
        ))}

      </Text>

    </AcademicStyle>

  );
};

export default Academic;
