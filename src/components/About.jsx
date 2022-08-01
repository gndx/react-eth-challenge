import React from 'react';

function About(props) {
  const { data } = props;

  return (
    <section className='About'>
      <h2 className='About-title'>About</h2>
      <p className='About-item'>
        <strong>Email:</strong>
        {' '}
        {data?.email}
      </p>
      <p className='About-item'>
        <strong>Website:</strong>
        {' '}
        {data?.website}
      </p>
      <p className='About-item'>
        <strong>Country:</strong>
        {' '}
        {data?.address}
      </p>
    </section>
  );
}

export default About;
