import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Utils/Card';

const Profile = ({ data }) => {
  return (
    <Card>
      <h1 className='Profile-title text-xl font-semibold mb-3 text-slate-900 dark:text-white'>Profile</h1>
      <span className='Profile-desc prose text-slate-500 dark:text-slate-400'>{data}</span>
    </Card>
  );
};

Profile.propTypes = {
  data: PropTypes.string.isRequired,
};
export default Profile;
