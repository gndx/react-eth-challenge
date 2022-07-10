import React from 'react';
import PropTypes from 'prop-types';

export function PercentageBar({ name, percentage, className }) {
  return (
    <div className={className}>
      <p>{name}</p>
      <div className="Percentage-container">
        <div className="Percentage-graph" style={{ width: percentage }}>
          {percentage}
        </div>
      </div>
    </div>
  );
}

PercentageBar.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  percentage: PropTypes.string,
};

export default PercentageBar;
