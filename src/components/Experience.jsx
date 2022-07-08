import React from "react";

/* Este componente renderiza informacion relacionada con la experiencia
Recibe data como propiedades */

const Experience = ({ data = [] }) => {
  return (
    <div className="Experience">
      <div className="Experience-title">Experience</div>
      <div className="Experience-content">
        <div className="Experience-item">
          <div className="item-title">{data[0]?.jobTitle}</div>
          <div className="item-company">Company: {data[0]?.company}</div>
          <div className="fact">
            <div className="date">From: {data[0]?.startDate}</div>
            <div className="date">To: {data[0]?.endDate}</div>
          </div>
          <div className="fact">{data[0]?.jobDescription}</div>
        </div>

        <div className="Experience-item">
          <div className="item-title">{data[1]?.jobTitle}</div>
          <div className="item-company">Company: {data[1]?.company}</div>
          <div className="fact">
            <div className="date">From: {data[1]?.startDate}</div>
            <div className="date">To: {data[1]?.endDate}</div>
          </div>
          <div className="fact">{data[1]?.jobDescription}</div>
        </div>

        <div className="Experience-item">
          <div className="item-title">{data[2]?.jobTitle}</div>
          <div className="item-company">Company: {data[2]?.company}</div>
          <div className="fact">
            <div className="date">From: {data[2]?.startDate}</div>
            <div className="date">To: {data[2]?.endDate}</div>
          </div>
          <div className="fact">{data[2]?.jobDescription}</div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
