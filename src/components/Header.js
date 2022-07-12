import React from 'react';

const Header = ({ children }) => {
  return (
    <header className="Header">
      <div className="Header-img-container">
        <img
          src="https://arepa.s3.amazonaws.com/melissa.jpg"
          alt="avatar image"
          className="Header-image"
        />
      </div>
      <div className="Header-info">
        <h1 className="Header-title">Header title</h1>
        <strong className="Header-job-title">Header-job-title</strong>
        <ul className="contact-info">
          <li className="Header-phone">Header-phone</li>
          <li className="Header-email">Header-email</li>
          <li className="Header-website">Header-website</li>
        </ul>
        <address className="Header-address">Header-address</address>
        {/* {children} */}
      </div>
    </header>
  );
};

export default Header;
