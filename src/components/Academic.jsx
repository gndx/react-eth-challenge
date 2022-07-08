import React from "react";

/* Este componente renderiza informacion relacionada con datos academicos
Recibe data como propiedades */

const Academic = ({ data = [] }) => {
  return (
    <div className="Academic">
      <div className="Academic-title">Academic</div>
      <div className="Academic-content">
        <div className="Academic-item">
          <div className="item-degree">{data[0]?.degree}</div>
          <div className="item-institution">
            Institution: {data[0]?.institution}
          </div>
          <div className="fact">
            <div className="date">From: {data[0]?.startDate}</div>
            <div className="date">To: {data[0]?.endDate}</div>
          </div>
          <div className="item-description">{data[0]?.description}</div>
        </div>

        <div className="Academic-item" />

        <div className="Academic-item" />
      </div>
    </div>
  );
};

export default Academic;
