import React from 'react';

const Header = ({children}) => {
  return (
    <section className='header'>
      <h1 className='Header-title'>
        Header-title
      </h1>
      {children}
    </section>
  );
}

export default Header;