import React from 'react';
import '../styles/components/Profile.styl';
import CompleteData from '../../data.json';

function Profile() {
  const { data } = CompleteData;
  return (
    <section className='Profile'>
      <h2 className='Profile-title'>About</h2>
      <p className='Profile-desc'>{data.Profile}</p>
    </section>
  );
};

export default Profile;
