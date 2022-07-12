import React from 'react';
import Card from './Card';

const Profile = ({ Profile }) => {
  return (
    <Card>
      <h2 className="Profile-title">Profile</h2>
      <p className="Profile-desc">{Profile}</p>
    </Card>
  );
};

export default Profile;
