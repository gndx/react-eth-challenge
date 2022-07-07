import React from 'react';

const Header = ({ children }) => {
  return (
    <div>
      <h1>.Header-title</h1>
      <p>.Header-job-title</p>
      <p>.Header-phone</p>
      <p>.Header-email</p>
      <p>.Header-website</p>
      <p>.Header-address</p>
      {children}
    </div>
  );
};

export default Header;
