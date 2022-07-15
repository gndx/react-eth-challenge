import React from 'react';
import { useTheme } from '../hooks/useTheme';
import '../styles/components/Header.styl';

function Header({ myself, children }) {
  const [theme, changeTheme] = useTheme();
  console.log(myself);
  const { image, name, position, phone, email, web, city, country } = myself;

  return (
    <div className='Header'>
      <figure className='Header-image'>
        <img src={image || ''} alt={name} />
      </figure>
      <div className='Header-container'>
        <div className='Header-title'>
          <input onClick={() => changeTheme(!theme)} type='checkbox' value={theme} />
          <h1>{name}</h1>
          <h2 className='Header-job-title'>{position}</h2>
        </div>

        <div className='Header-body'>
          <p className='Header-phone'>
            <b>Celular: </b>
            {phone}
          </p>
          <p className='Header-email'>
            <b>Correo: </b>
            {email}
          </p>

          <p className='Header-website'>
            <b>Web: </b>
            <a href={`http://${web}`}>{web}</a>
          </p>
          <p className='Header-address'>
            <b>{`${city} - ${country}`}</b>
          </p>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Header;
