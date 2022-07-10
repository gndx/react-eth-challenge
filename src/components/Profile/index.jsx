import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';

/** Shows profile information from data context*/
const Profile = () => {
  const data = useContext(AppContext);
  return (
    <section className='profile'>
      <h2 className='Profile-title'>Profile</h2>
      <p className='Profile-desc'>{data.Profile}</p>
    </section>
  );
};

export default Profile;
