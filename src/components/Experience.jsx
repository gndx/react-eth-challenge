import React from 'react';
import {Titulo} from "../styles/components/Experience"

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
    <div>
      <Titulo className="Experience-title">Experience</Titulo>
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
    </div>
  );
};

export default Experience;