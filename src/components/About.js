import React from 'react';

const About = () => {
  return (
    <div>
      <h2 className='About-title'>Title</h2>
      {
        [1, 2, 3].map((id) => (
          <p key={id} className='About-item'>About item</p>
        ))
      }
    </div>
  );
}

export default About;
