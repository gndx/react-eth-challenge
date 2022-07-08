import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';

const About = () => {
  const data = useContext(AppContext)
  return (
    <section className="about-content">
      <div className="description">
        <h2 className='About-title'>About Me</h2>
        <p className='About-item'>{data.profession}</p>
        <p className='About-item'>{data.address}</p>
        <p className='About-item'>{data.email}</p>
      </div>
    </section>
  );
};

export default About;
