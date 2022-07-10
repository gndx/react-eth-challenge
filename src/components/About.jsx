import React from 'react';
import '../styles/components/App.styl';

const About = ({ phone, website, email, social }) => {

  const sociales = Array.from(new Set(social));

  return (
    <div className='About'>
      <div className='About-title colorblue'>Contáctame</div>
      <div className='About__description'>
        <span className='About-item'>{`☎️ ${phone}`}</span>
        <span className='About-item'>{`🌐 ${website}`}</span>
        <span className='About-item'>{`📧 ${email}`}</span>
      </div>
      <div className='About__description'>
        {sociales.map((item) => <a href={item.url} className='About-item badgeline' key={item.name}>{item.name}</a>)}
      </div>
    </div>
  );
};

export default About;
