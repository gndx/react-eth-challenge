import React from 'react';

const DEFAULT_IMAGE = 'https://avatars.githubusercontent.com/sergiogval'

export const Header = () => {
    return (
      <header>
        <img src={DEFAULT_IMAGE} alt='avatar' />
        <h1 className='Header-title'>Sergio Valadez</h1>
        <p className='Header-job-title'>Current job: Freelancer</p>
        <p className='Header-email'>Correo: sergioval@gmail.com</p>

      </header>
    );
}
