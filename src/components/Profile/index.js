import React from 'react';

const Profile = ({ data }) => {
  return (
    <div className="ProfileMainContainer">
      <h4 className="Profile-title">Perfil Profesional</h4>
      <div className="ProfileContainer">
        <p className="Profile-desc">{data?.Profile}</p>
      </div>
    </div>
  );
};

export default Profile;
