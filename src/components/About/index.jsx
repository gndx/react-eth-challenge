import React, { useContext } from 'react';
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';
import AppContext from '../../context/AppContext';
import '../../styles/components/About.styl';

/** Shows About from data context*/
const About = () => {
  const data = useContext(AppContext);
  return (
    <section className='about-content'>
      <h2 className='About-title'>About Me</h2>
      <ul className='about-rrss'>
        <li>
          <a href={data.social && data.social[0].url}>
            <BsGithub color='#6A7699' size='30px' />
          </a>
        </li>
        <li>
          <a href={data.social && data.social[1].url}>
            <BsLinkedin color='#6A7699' size='30px' />
          </a>
        </li>
        <li>
          <a href={data.social && data.social[2].url}>
            <BsTwitter color='#6A7699' size='30px' />
          </a>
        </li>
      </ul>
      <div className='about-description'>
        <p className='About-item'>{data.profession}</p>
        <p className='About-item'>{data.address}</p>
        <p className='About-item'>{data.email}</p>
      </div>
    </section>
  );
};

export default About;
