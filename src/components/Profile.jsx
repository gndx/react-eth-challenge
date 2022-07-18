import React from 'react';
import '../styles/components/Profile.styl';

const Profile = (props) => {
  return (
    <div className='Profile'>
        <h1 className='Profile-title'>My Profile</h1>
       	<p1 className='Profile-desc'> {props.Description} </p1>
    </div>
  );
};

export default Profile;