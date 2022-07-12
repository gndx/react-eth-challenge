import React from 'react';
import {Title} from '../styles/components/Profile'

const Profile = ({ profile }) => {
  return (
    <div>
      <Title className="Profile-title">Profile</Title>
      <p className="Profile-desc">{profile}</p>
    </div>
  );
};

export default Profile;