import React from 'react';

const Profile = (props) => {
  return (
    <div className="ProfileMainContainer">
      <h4>Perfil Profesional</h4>
      <div className="ProfileContainer">
        <p>{props.data.Profile}</p>
      </div>
    </div>
  );
};

export default Profile;
