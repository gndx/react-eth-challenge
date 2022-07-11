import React from 'react';

const Profile = ({ data }) => {
  return (
    <div>
      <h1 className="Profile-title">Profile</h1>
      <p className="Profile-desc"> {data}</p>
    </div>
  );
};
export default Profile;
