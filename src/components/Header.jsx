import React from 'react';

function Header({ avatar, name, profession, phone, email, website, address }) {
  return (
    <div className="Header">
      <div className="card">
        <div className="container">
          <div className="avatar">
            <img className='avatar-image' width={'200px'} src={avatar} />
          </div>
          <div className="about">
            <div className="Header-title">{name}</div>
            <div className="Header-job-title">{profession}</div>
            <div className="Header-email">{email}</div>
            <div className="Header-website">{website}</div>
            <div className="Header-address">{address}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
