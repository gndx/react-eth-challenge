import React from 'react';
import data from '../../../data.json';

import '../../styles/components/Profile.styl';

function Profile() {
  return (
    <div className='Profile'>
      <h2 className='Profile-title'>
        Profile
      </h2>
      <span className='Profile-desc'>
        { data.data?.Profile }
      </span>
    </div>
  );
}

export default Profile;
