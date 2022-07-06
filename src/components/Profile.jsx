import React from 'react';
import PropTypes from 'prop-types';
import '../styles/App.css';
import { Box } from './Box';

export const Profile = ({ className }) => {
  return (
    <Box
      className={`${className}`}
      classTitle="Profile-title"
      title={'Profile Title'}
    >
      <div>
        <p className={'Profile-desc'}>Profile Desc</p>
      </div>
    </Box>
  );
};

Profile.propTypes = {
  className: PropTypes.string,
};

export default Profile;
