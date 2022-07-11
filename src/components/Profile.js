import React from 'react';

const Profile = ({description}) => {
  return (
    <div className="base-wrapper flex-column">
      <div className='Profile-title'>Profile</div>
      <span className='Profile-desc'>{description}</span>
    </div>
  );
};

export default Profile;
