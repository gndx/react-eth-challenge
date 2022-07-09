import React from 'react';
import db from '../../data.json';

function Profile() {
  return (
    <div className='container my-2'>
      <p className='Profile-title h3 fw-bold'>Profile</p>
      <p className='Profile-desc'>{db.data.Profile}</p>
    </div>
  );
};

export default Profile;
