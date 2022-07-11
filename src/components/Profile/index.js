import React from 'react';
import { ProfileStyle } from './styles';

function Profile({ data = {} }) {
  return (

    <ProfileStyle className='profile' key='ProfileStyle'>

      {' '}
      <h2 className='Profile-title'>Profile</h2>
      <p className='Profile-desc'>
        {' '}
        {data.profile}
      </p>

    </ProfileStyle>

  );
};

export default Profile;
