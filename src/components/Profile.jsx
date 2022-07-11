import React from 'react';
import Card from './Card';
import '../styles/components/Profile.styl';

const Profile = ({ profile }) => {
  return (
    <Card>
      <h2 className="Profile-title">Profile</h2>
      <p className="Profile-desc">{profile}</p>
    </Card>
  );
};

export default Profile;
