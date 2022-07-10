import React from 'react';
import '../styles/components/Profile.styl';

const Profile = ({ description }) => {
  return (
    <div className="Profile-container">
      <h2 className="Profile-title">Profile</h2>
      <div className="Profile-desc">{description}</div>
    </div>
  );
};

export default Profile;