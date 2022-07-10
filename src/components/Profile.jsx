import React from 'react';
import '../styles/components/App.styl';

const Profile = ({ profile }) => {
  return (
    <div className='Profile'>
      <h2 className='Profile-title subtitle'>Profile</h2>
      <div className='Profile-desc'>{profile}</div>
    </div>
  );
};

export default Profile;
