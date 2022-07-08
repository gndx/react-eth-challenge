import React from "react";

/* Este componente renderiza una breve descripcion de la persona
Recibe data como propiedades */

const Profile = ({ data = {} }) => {
  return (
    <div className="Profile">
      <div className="Profile-title" />
      <div className="Profile-desc">{data.Profile}</div>
    </div>
  );
};

export default Profile;
