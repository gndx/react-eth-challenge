import React from "react";

/* Este componente renderiza informacion relacionada con los intereses
Recibe data como propiedades */

const Interest = ({ data = [] }) => {
  return (
    <div className="Interest">
      <div className="Interest-title">Interest</div>
      <div className="Interest-content">
        <div className="Interest-item">{data[0]}</div>
        <div className="Interest-item">{data[1]}</div>
        <div className="Interest-item">{data[2]}</div>
      </div>
    </div>
  );
};

export default Interest;
