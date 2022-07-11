import React from 'react';
import '../styles/components/Profile.css';

function Profile({ profile }) {
  return (
    <section className='Profile'>
      <h2 className='Profile-title'>Profile</h2>
      <p className='Profile-desc'>{profile}</p>
    </section>
  );
}

export default Profile;
