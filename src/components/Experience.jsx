import React from 'react';

const Experience = ({ data = ['', '', ''] }) => {
  return (
    <div>
      <h3 className="Experience-title">Experience</h3>
      {data.map((el) => {
        return (
          <div className="Experience-item" key={el.company}>
            company: {el.company}
            endDate: {el.endDate}
            jobTitle: {el.jobTitle}
            startDate: {el.startDate}
            description: {el.jobDescription}
          </div>
        );
      })}
    </div>
  );
};
export default Experience;
