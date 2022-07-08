import React from "react";

/* Este componente renderiza informacion relacionada con los skills
Recibe data como propiedades */

const Skills = ({ data = [] }) => {
  return (
    <div className="Skills">
      <div className="Skills-title">Skills</div>
      <div className="Skills-content">
        <div className="Skills-item">
          <div className="Skills-name">{data[0]?.name}</div>
          <div className="Skills-percentaje">{data[0]?.percentage}</div>
        </div>
        <div className="Skills-item">
          <div className="Skills-name">{data[1]?.name}</div>
          <div className="Skills-percentaje">{data[1]?.percentage}</div>
        </div>
        <div className="Skills-item">
          <div className="Skills-name">{data[2]?.name}</div>
          <div className="Skills-percentaje">{data[2]?.percentage}</div>
        </div>
        <div className="Skills-item">
          <div className="Skills-name">{data[3]?.name}</div>
          <div className="Skills-percentaje">{data[3]?.percentage}</div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
