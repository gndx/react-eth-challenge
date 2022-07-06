import React from 'react';
import Card from './Card';

const Experience = ({
  experience = Array(3).fill({
    company: '',
    endDate: '',
    jobDescription: '',
    jobTitle: '',
    startDate: '',
  }),
}) => {
  return (
    <Card>
      <h2 className="Experience-title">Experience</h2>
      <ul>
        {experience.map(
          (
            { company, endDate, jobDescription, jobTitle, startDate },
            index
          ) => (
            <li
              key={`${company}_${endDate}_${jobDescription}_${jobTitle}_${startDate}_${index}`}
              className="Experience-item"
            >
              <h3>Company: {company}</h3>
              <h4>{jobTitle}</h4>
              <p>{jobDescription}</p>
              <p>
                {startDate} - {endDate}
              </p>
            </li>
          )
        )}
      </ul>
    </Card>
  );
};

export default Experience;
