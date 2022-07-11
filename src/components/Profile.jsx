import React from 'react';
import '../styles/components/Profile.styl';

function Profile({ description }) {
  return (
    <section className='Profile'>
      <div className='Profile-container General-container'>
        <h1 className='Profile-title General-title'>About me</h1>
        <p className='Profile-desc'>{description}</p>
      </div>
    </section>
  );
}

export default Profile;
