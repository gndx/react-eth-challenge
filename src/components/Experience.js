import React from 'react';

const Experience = ({ experiences = [{}, {}, {}] }) => {
  return (
    <div className="base-wrapper flex-column">
      <div className="Experience-title">Experience</div>
      <div className="custom-list">
        {experiences &&
          experiences.map((item, index) => {
            return (
              <span key={index} className="Experience-item">
                {item.company}: {item.jobTitle} | {item.startDate} - {item.endDate}
              </span>
            );
          })}
      </div>
    </div>
  );
};

export default Experience;
