import React from 'react';
import PropTypes from 'prop-types';
const Interest = ({ interest = Array(3).fill(0) }) => {
  return (
    <div className="Interest background-green">
      <h2 className="Interest-title">Intereses</h2>
      <ul className="global-ul">
        {interest.map((item, index) => (
          <li className="Interest-item" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
Interest.propTypes = {
  interest: PropTypes.array,
};
export default Interest;
