import React from 'react';
import './styles.styl'

const Profile = ({ profile }) => {
  return (
    <div className="profile">
      <h2 className="Profile-title">Perfil</h2>
      <p className="Profile-desc">{profile}</p>
    </div>
  );
};

export default Profile;
