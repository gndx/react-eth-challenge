import React from 'react';
import PropTypes from 'prop-types';
const Languages = ({ languages = Array(3).fill(0) }) => {
  return (
    <div className="Languages background-green">
      <h2 className="Languages-title">Languages</h2>
      <ul className="global-ul">
        {languages.map((item, index) => (
          <li className="Languages-item" key={index}>
            <strong>{item.name}:</strong> {item.percentage}
          </li>
        ))}
      </ul>
    </div>
  );
};
Languages.propTypes = {
  languages: PropTypes.array,
};
export default Languages;
