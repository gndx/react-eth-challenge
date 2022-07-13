import React from 'react';

function Profile({Profile}) {
  return (
    <div className="Profile">
      <div className="card">
        <div className="Profile-title">Profile</div>
        <div className="Profile-desc">{Profile}</div>
      </div>
    </div>
  );
}

export default Profile;
