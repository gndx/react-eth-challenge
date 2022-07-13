import React from 'react';
import '../styles/components/Profile.styl';

const Profile = ({ profile }) => {
  return (
    <div className='Profile'>
      <div className='Profile-title'> 🙍‍♂️ Profile </div>
      <div className='Profile-desc'>{profile}</div>
    </div>
  );
};

export default Profile;
