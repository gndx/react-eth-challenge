import React from 'react';
import db from '../../../data.json';
import { Text, ProfileStyle } from './styles';

function Profile() {
  return (

    <ProfileStyle className='profile' key='ProfileStyle'>
      <Text>
        {' '}
        <h2 className='Profile-title'>Profile</h2>
        <div className='Profile-desc'>
          {' '}
          {db.data.profile}
        </div>
      </Text>

    </ProfileStyle>

  );
};

export default Profile;
