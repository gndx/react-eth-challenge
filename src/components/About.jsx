import React from "react";

/* Este componente es el children del header
Recibe data como propiedades */

const About = ({ data = {} }) => {
  return (
    <div className="About">
      <div className="About-title">{data.name}</div>
      <div className="About-content">
        <div className="About-item">⚪ {data.phone}</div>
        <div className="About-item">⚪ {data.email}</div>
        <div className="About-item">⚪ {data.website}</div>
        <div className="About-item">{data.address}</div>
      </div>
    </div>
  );
};

export default About;
