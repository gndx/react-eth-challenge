import React from 'react';
import PropTypes from 'prop-types';
const Experience = ({ experience = Array(3).fill(0) }) => {
  return (
    <div className="Experience background-green">
      <h2 className="Experience-title">Experience</h2>
      {experience.map((item, index) => (
        <div className="Experience-item" key={index}>
          <ul className="global-ul">
            <li>
              <strong>Company:</strong> {item.company}
            </li>
            <li>
              <strong>End date:</strong> {item.endDate}
            </li>
            <li>
              <strong>Description:</strong>
              {item.jobDescription}
            </li>
            <li>
              <strong>Title:</strong> {item.jobTitle}
            </li>
            <li>
              <strong>Start date:</strong> {item.startDate}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};
Experience.propTypes = {
  experience: PropTypes.array,
};
export default Experience;
