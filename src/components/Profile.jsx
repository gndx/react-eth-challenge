import React from 'react';
import '../styles/components/Profile.scss';

function Profile(props) {
  return (
    <div>
      <h2 className='Profile-title'>Profile</h2>
      <h3 className='Profile-desc'>{props.profile}</h3>
    </div>
  );
}

export default Profile;
