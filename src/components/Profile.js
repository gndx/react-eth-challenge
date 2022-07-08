import React from 'react';

const Profile = ({ profile }) => {
  return (
    <div>
      <h2 className="Profile-title">Perfil</h2>
      <p className="Profile-desc">{profile}</p>
    </div>
  );
};

export default Profile;
