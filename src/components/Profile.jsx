import React from 'react';

function Profile({ info = {} }) {
  return (
    <div className="profile-container">
      <h1 className="Profile-title">{info.name}</h1>
      <p className="Profile-profession">{info.profession}</p>
      <p className="Profile-desc">{info.Profile}</p>
    </div>
  );
}

export default Profile;
