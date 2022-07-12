import React from 'react';
import {Boxing} from '../styles/components/Profile'

const Profile = ({ profile }) => {
  return (
    <Boxing>
      <h1 className="Profile-title">Profile</h1>
      <p className="Profile-desc">{profile}</p>
    </Boxing>
  );
};

export default Profile;