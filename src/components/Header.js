import React from 'react';

function Header({
  children,
  avatar,
  name,
  profession,
  address,
  email,
  phone,
  website,
}) {
  return (
    <header className="Header">
      <div className="Header-img-container">
        <img src={avatar} alt="avatar image" className="Header-image" />
      </div>
      <div className="Header-info">
        <h1 className="Header-title">{name}</h1>
        <strong className="Header-job-title">{profession}</strong>
        <ul className="contact-info">
          <li className="Header-phone">
            <a href={`tel:${phone}`}>{phone}</a>
          </li>
          <li className="Header-email">
            <a href={`mailto:${email}`}> {email}</a>
          </li>
          <li className="Header-website">
            <a href={website} target="_blank">
              {website}
            </a>
          </li>
        </ul>
        <address className="Header-address">{address}</address>
        {/* {children} */}
      </div>
    </header>
  );
}

export default Header;
