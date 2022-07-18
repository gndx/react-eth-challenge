import React from 'react';
import {Boxing} from '../styles/components/Profile'

const Profile = ({ profile }) => {
  return (
    <Boxing>
    <section className="Profile">
      <h2 className="Profile-title">Profile</h2>
      <p className="Profile-desc">{profile}</p>
    </section>
    </Boxing>
  );
};

export default Profile;