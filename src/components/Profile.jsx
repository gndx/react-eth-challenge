/* eslint-disable import/no-cycle */
import React from 'react';
import { appContext } from '../containers/AppContext';

function Profile() {
  const { Profile } = appContext();
  return (
    <section className='Profile'>
      <h2 className='Profile-title'>Profile</h2>
      <article className='Profile-desc'>
        <p>{Profile}</p>
      </article>
    </section>
  );
}

export default Profile;
