import React from 'react';
import Card from '../Card';
import '../../styles/components/Experience.css';

function Experience({ experience }) {
  return (
    <Card>
      <h2 className='Experience-title'>Experience</h2>
      <ul className='Experience-list'>
        {experience?.map(
          ({ company, endDate, jobDescription, jobTitle, startDate }) => (
            <li
              key={`${company}${endDate}${jobDescription}${jobTitle}${startDate}`}
              className='Experience-item'
            >
              <h3>{company}</h3>
              <h4>{jobTitle}</h4>
              <p>{jobDescription}</p>
              <small>
                {startDate}
                {' '}
                -
                {' '}
                {endDate}
              </small>
            </li>
          ),
        )}
      </ul>
    </Card>
  );
}
export default Experience;
