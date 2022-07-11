import React from 'react';
import useUserData from '../hooks/useUserData';

const Profile = () => {
  const { userData } = useUserData();

  return (
    <>
      {
        (userData) &&
        <>
          <div className='Profile-title'>
            <h2>Profile</h2>
          </div>

          <div className='Profile-desc'>
            <p>
              {userData.Profile}
            </p>
          </div>
        </>
      }
    </>
  )
};

export default Profile;
