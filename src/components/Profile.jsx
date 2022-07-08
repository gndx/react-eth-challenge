import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../styles/App.css';
import { Box } from './Box';

export const Profile = ({ className, userProfile }) => {
  const [profile, setProfile] = useState(userProfile);

  useEffect(() => {
    setProfile(userProfile);
  }, [userProfile]);

  return (
    <Box className={className} classTitle="Profile-title" title={'Profile'}>
      <div>
        <p className={'Profile-desc'}>{profile}</p>
      </div>
    </Box>
  );
};

Profile.propTypes = {
  className: PropTypes.string,
  userProfile: PropTypes.string,
};

Profile.defaultProps = {
  className: '',
  userProfile: '',
};

export default Profile;
