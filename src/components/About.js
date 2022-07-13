import React from 'react';

const About = ({ phone, email, website, adress }) => {
  return (
    <div>
      <div className='About-title'>📞 Contact  </div>
      <div>
        <div className='Header-contact'>
          <div className='Header-email About-item'>
            {email}
          </div>
          <div className='Header-phone About-item'>
            {phone}
          </div>
          <div className='Header-website About-item'>
            <a href={website}>{website}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
