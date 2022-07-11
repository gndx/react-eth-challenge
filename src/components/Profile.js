import React from 'react';
import PropTypes from 'prop-types';
const ComponentProfile = ({ Profile }) => {
  return (
    <div className="Profile background-green">
      <h2 className="Profile-title">Profile</h2>
      <p className="Profile-desc">{Profile}</p>
    </div>
  );
};
ComponentProfile.propTypes = {
  Profile: PropTypes.string,
};
export default ComponentProfile;
