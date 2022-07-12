import React from 'react';
import data from '../../../data.json';

import '../../styles/components/About.styl';

const correo = JSON.stringify(data.data?.email);

function About() {
  return (
    <div className='About'>
      <h4 className='About-title'>About me</h4>
      <span className='About-phone About-item'>
        <strong>Phone:</strong> { data.data?.phone }
      </span>
      <span className='About-email About-item'>
        <strong>E-mail:</strong> <a className='About-email' href={`mailto:${correo}`} target='blank'>{ data.data?.email }</a>
      </span>
      <span className='About-website About-item'>
        <strong>Github:</strong> <a className='About-website' href={ data.data?.website } target='blank'>{ data.data?.website }</a>
      </span>
    </div>
  );
}

export default About;
