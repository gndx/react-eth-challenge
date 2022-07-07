import React from 'react';

export default function Profile({ profile }) {
  const photo = 'https://i.imgur.com/VYG1gyJ.png';
  return (
    <section className='Profile'>
      <div className='Profile-info'>
        <h2 className='Profile-title'>¿Quién soy?</h2>
        <span className='Profile-desc'>{profile}</span>
      </div>
      <img src={photo} alt='Quien soy foto' />
    </section>
  );
}
