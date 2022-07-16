import React from 'react';
import '../styles/components/App.styl';
import { FiMail } from 'react-icons/fi';
import { FaGithubAlt, FaLinkedinIn, FaWhatsapp, FaGlobe, FaTwitter } from 'react-icons/fa';
import { MdLocationPin } from 'react-icons/md';

function About({ data = {} }) {
  return (
    <div className='about'>
      <h2 className='About-title'>Contact</h2>
      <a className='About-item' href={`mailto:${data.email}`}>
        <FiMail className='About-social' size='20' />
        {data.email}
      </a>
      <p className='About-item'>
        <FaWhatsapp className='About-social' size='20' />
        {data.phone}
      </p>
      <a className='About-item' href={data.website}>
        <FaGlobe className='About-social' size='20' />
        {data.website}
      </a>
      <p className='About-item'>
        <MdLocationPin className='About-social' size='20' />
        {data.address}
      </p>
      <a className='About-social' href='https://https://github.com/sergiogval'>
        <FaGithubAlt size='32' />
      </a>
      <a className='About-social' href='https://linkedin.com/in/sergio-valadez-rivera'>
        <FaLinkedinIn size='32' />
      </a>
      <a className='About-social' href='https://twitter.com/srgvldz'>
        <FaTwitter size='32' />
      </a>
    </div>
  );
};

export default About;
