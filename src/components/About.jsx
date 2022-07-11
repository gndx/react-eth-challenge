import React from 'react';

const About = ({ userData }) => {

  return (
    <>
      <div className='About-title'>
        <h2>{userData.profession}</h2>
      </div>

      <div className='About'>
        <div className='About-item'>
          <span> <b>Telephone:</b> {userData.phone}</span>
        </div>

        <div className='About-item'>
          <span>  <b>Email:</b> {userData.email}</span>
        </div>

        <div className='About-item'>
          <span>  <b>Website:</b> {userData.website}</span>
        </div>

        <div className='About-item'>
          <span>  <b>Address:</b> {userData.address}</span>
        </div>
      </div>
    </>
  )
};

export default About;
