import React from 'react';

const Header = ({ children, userData }) => {

  return (
    <>
      <div className='Header'>
        <img className='Header-img' src={userData.avatar} />

        <div className='Header-info'>
          <h1 className='Header-title' >{userData.name}</h1>

          {children}
        </div>

      </div>

    </>
  )
};

export default Header;
