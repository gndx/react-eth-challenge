import React from 'react';
import Card from './Card';
import '../styles/components/Experience.styl';

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
              <h3>{company}</h3>
              <h5>{jobTitle}</h5>
              <p>{jobDescription}</p>
              <small>{startDate} - {endDate}</small>
            </li>
          )
        )}
      </ul>
    </Card>
  );
};

export default Experience;
