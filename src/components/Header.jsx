import React from 'react';
import './Header.styl';

export const Header = ({
  name,
  position,
  phone,
  email,
  website,
  image,
  children,
}) => {
  return (
    <header className="Header-title">
      <img src={image} alt={name} />
      <h1>{name}</h1>

      <h5>{position}</h5>

      <div className="Header-details">
        <a className="phone" href={`tel:${phone}`}>
          {phone}
        </a>
        <a className="email" href={`mailto:${email}`}>
          {email}
        </a>
        <a className="website" target="_blank" href={website}>
          Website
        </a>
      </div>
      <section className="about">{children}</section>
    </header>
  );
};
