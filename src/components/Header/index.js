import React from 'react';

const Header = ({ data, children }) => {
  return (
    <>
      <div className="HeaderContainer">
        <div className="Headersection1">
          <img src={data?.avatar} alt="photo" />
        </div>
        <div>
          <h4 className="Header-title">{data?.name}</h4>
          {children}
        </div>
      </div>
    </>
  );
};

export default Header;
