import React from 'react';
import data from '../../data.json';

const Profile = () => {
  return (
    <div className="Profile">
      <h2 className="Profile-title">
        Perfil
      </h2>
      <span className="Profile-desc">
        { data.data?.Profile }
      </span>
    </div>
  );
}

export default Profile;