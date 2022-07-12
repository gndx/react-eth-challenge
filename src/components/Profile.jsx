import React, {useContext} from 'react';
import { Context } from '../containers/App';

const Profile = () => {
  
  const data = useContext(Context);

  return (
    <>
      <h1 className="Profile-title">Profile</h1>
      <p className="Profile-desc">{data.profile}</p>
    </>
  );
};

export default Profile;
