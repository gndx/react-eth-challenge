import React from 'react';
import Card from './Card';
import { Description } from './Profilestyles';

const Profile = ({ profile }) => {
  return (
    <Card>
      <h2 className="Profile-title">Profile</h2>
      <Description className="Profile-desc">{profile}</Description>
    </Card>
  );
};

export default Profile; 