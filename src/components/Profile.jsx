import React from 'react';
import '../styles/components/Profile.styl';

function Profile({ profile }) {
  return (
    <section className='Profile-section'>
      <h2 className='Profile-title'>Profile Description</h2>
      <p className='Profile-desc'>{profile}</p>
    </section>
  );
}

export default Profile;
