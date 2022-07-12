import React from 'react';
import {Boxing} from "../styles/components/Experience"

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
    <Boxing>
      <h1 className="Experience-title">Experience</h1>
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
              <p>
                {startDate} - {endDate}
              </p>
              <p>{jobDescription}</p>
            </li>
          )
        )}
      </ul>
    </Boxing>
  );
};

export default Experience;