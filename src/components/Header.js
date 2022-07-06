import React from 'react';

const DEFAULT_IMAGE = 'https://www.pngfind.com/pngs/m/21-215596_smiley-png-transparent-background-smiley-face-png-png.png'

export const Header = () => {
    return (
      <header>
        <h1 className='Header-title'>Sergio Valadez</h1>
        <p className='Header-job-title'>Current job: Freelancer</p>
        <snap className='Header-email'>Correo: sergioval@gmail.com</snap>
      </header>
    );
}
