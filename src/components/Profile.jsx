import React from 'react';

const Profile = (props) => {
    return (
      <section className='Profile'>
        <h1 className='Profile-title'>Profile</h1>
        <p className='Profile-desc'> {props.data?.Profile}</p>
      </section>
    )
  };
  
  export default Profile;
  