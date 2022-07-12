import React from 'react';
import '../styles/components/Profile.css';

function Profile({ profile }) {
  return (
    <section className='Profile'>
      <h3 className='Profile-title'>
        Profile
      </h3>
      <p className='Profile-desc'>
        {profile}
      </p>
    </section>
  );
}

export default Profile;
