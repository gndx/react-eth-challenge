import React from 'react';

const Profile = ({ userData }) => {

  return (
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
  )
};

export default Profile;
