import React from 'react';

const Experience = ({ experience }) => {
  if (experience === undefined) {
    experience = [
      {
        startDate: '',
        endDate: '',
        company: '',
        jobTitle: '',
        jobDescription: '',
      },
      {
        startDate: '',
        endDate: '',
        company: '',
        jobTitle: '',
        jobDescription: '',
      },
      {
        startDate: '',
        endDate: '',
        company: '',
        jobTitle: '',
        jobDescription: '',
      },
    ];
  }
  return (
    <div className="ExperienceMainContainer">
      <div className="section">
        <h4 className="Experience-title">Experiencia</h4>
        <div className="Experience-item ExperienceContainer">
          <p>
            <strong>Fecha: </strong>
            {experience[0]?.startDate} - {experience[0]?.endDate}
          </p>
          <p className="Experience-item">
            <strong>Compañía:</strong> {experience[0]?.company}
          </p>
          <p>
            <strong>Cargo:</strong> {experience[0]?.jobTitle}
          </p>
          <p>
            <strong>Descripción:</strong> {experience[0]?.jobDescription}
          </p>
        </div>
        <div className="Experience-item ExperienceContainer">
          <p>
            <strong>Fecha: </strong>
            {experience[0]?.startDate} - {experience[1]?.endDate}
          </p>
          <p className="Experience-item">
            <strong>Compañía:</strong> {experience[1]?.company}
          </p>
          <p>
            <strong>Cargo:</strong> {experience[1]?.jobTitle}
          </p>
          <p>
            <strong>Descripción:</strong> {experience[1]?.jobDescription}
          </p>
        </div>
        <div className="Experience-item ExperienceContainer">
          <p>
            <strong>Fecha: </strong>
            {experience[0]?.startDate} - {experience[2]?.endDate}
          </p>
          <p className="Experience-item">
            <strong>Compañía:</strong> {experience[2]?.company}
          </p>
          <p>
            <strong>Cargo:</strong> {experience[2]?.jobTitle}
          </p>
          <p>
            <strong>Descripción:</strong> {experience[2]?.jobDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
