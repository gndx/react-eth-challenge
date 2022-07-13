import React from 'react';
import '../styles/components/Profile.styl';

const Profile = ({ description }) => {
  return (
    <div className='Profile'>
      <h2 className='Profile-title'>
        Profile
      </h2>
      <hr />
      <p className='Profile-desc'>
        {description}
      </p>
    </div>
  );
};

export default Profile;
