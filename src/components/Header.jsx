import React from "react";

/* Este componente reenderiza el header del CV.
Recibe data y children como propiedades */

const Header = ({ children, data = {} }) => {
  const { avatar } = data;
  return (
    <div className="Header">
      <div className="Header-img">
        <img src={avatar} alt="" />
      </div>
      <div className="Header-content">
        <div className="Header-title">{data.profession}</div>
        {children}
      </div>
    </div>
  );
};

export default Header;
