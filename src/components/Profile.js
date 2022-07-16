import React from 'react';

function Profile({ profile }) {
  return (
    <div className='profile'>
      <h2 className='Profile-title'> Profile </h2>
      <p className='Profile-desc'>{profile}</p>
    </div>
  );
}

export default Profile;
