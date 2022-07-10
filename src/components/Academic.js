import React from 'react';
import PropTypes from 'prop-types';
const Academic = ({ Academic = Array(3).fill(0) }) => {
  return (
    <div className="Academic background-green">
      <h2 className="Academic-title">Academic</h2>

      {Academic.map((item, index) => (
        <ul className="global-ul Academic-ul" key={index}>
          <li className="Academic-item">
            <strong>Degree:</strong> {item.degree}
          </li>
          <li className="Academic-item">
            <strong>Description:</strong> {item.description}
          </li>
          <li className="Academic-item">
            <strong>End date:</strong> {item.endDate}
          </li>
          <li className="Academic-item">
            <strong>Institution:</strong> {item.institution}
          </li>
          <li className="Academic-item">
            <strong>Start date:</strong> {item.startDate}
          </li>
        </ul>
      ))}
    </div>
  );
};
Academic.propTypes = {
  Academic: PropTypes.array,
};
export default Academic;
