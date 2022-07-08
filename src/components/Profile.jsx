import React from 'react';
import '../styles/components/Profile.styl';

const Profile = ({ description }) => {
  return (
    <div className="Profile">
      <h3 className="Profile-title">
        Perfil
      </h3>
      <p className="Profile-desc">
        {description} 
      </p>
    </div>
  );
}

export default Profile;
