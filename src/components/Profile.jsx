import React from 'react';
import db from '../../data.json';

const Profile = () => {
  return (
    <div className="profile">
      <div className="Profile-title">{db.data.profession}</div>
      <div className="Profile-desc">{db.data.Profile}</div>
    </div>
  );
};

export default Profile;
