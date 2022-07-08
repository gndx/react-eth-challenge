import React from "react";

/* Este componente renderiza informacion relacionada con los idiomas
Recibe data como propiedades */

const Languages = ({ data = [] }) => {
  return (
    <div className="Languages">
      <div className="Languages-title">Languages</div>
      <div className="Languages-content">
        <div className="Languages-item">
          <div className="Languages-name">{data[0]?.name}</div>
          <div className="Languages-percentaje">{data[0]?.percentage}</div>
        </div>
        <div className="Languages-item">
          <div className="Languages-name">{data[1]?.name}</div>
          <div className="Languages-percentaje">{data[1]?.percentage}</div>
        </div>
        <div className="Languages-item">
          <div className="Languages-name">{data[2]?.name}</div>
          <div className="Languages-percentaje">{data[2]?.percentage}</div>
        </div>
      </div>
    </div>
  );
};

export default Languages;
