import React, { useContext } from 'react';
import { Context } from '../containers/App';

const Profile = () => {
  const data = useContext(Context);

  return (
    <div>
      <h2 className="neon-title Profile-title">Perfil</h2>
      <p className="mt-1 p-1 Profile-desc">{data?.Profile}</p>
    </div>
  );
};

export default Profile;
