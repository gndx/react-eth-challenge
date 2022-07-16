import React from 'react';
import '../styles/components/Profile.css';

function Profile(props) {
  return (
    <div>
      <h2 className='Profile-title'>Profile</h2>
      <p className='Profile-desc'>{props.profile}</p>
    </div>
  );
}

export default Profile;