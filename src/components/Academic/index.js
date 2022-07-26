import React from 'react';

function Academic({ academic }) {
  if (academic === undefined) {
    academic = [
      {
        startDate: '',
        endDate: '',
        institution: '',
        degree: '',
      },
      {
        startDate: '',
        endDate: '',
        institution: '',
        degree: '',
      },
      {
        startDate: '',
        endDate: '',
        institution: '',
        degree: '',
      },
      {
        startDate: '',
        endDate: '',
        institution: '',
        degree: '',
      },
    ];
  }
  return (
    <>
      <div className="AcademicContainer">
        <div className="section">
          <h4 className="Academic-title">Academico:</h4>

          <div className="Academic-item AcademicContainer">
            <p>
              <strong>Fecha: </strong>
              {academic[0]?.startDate} - {academic[0]?.endDate}
            </p>
            <p>
              <strong>Institución:</strong> {academic[0]?.institution}
            </p>
            <p>
              <strong>Título:</strong> {academic[0]?.degree}
            </p>
          </div>
          <div className="Academic-item AcademicContainer">
            <p>
              <strong>Fecha: </strong>
              {academic[1]?.startDate} - {academic[1]?.endDate}
            </p>
            <p>
              <strong>Institución:</strong> {academic[1]?.institution}
            </p>
            <p>
              <strong>Título:</strong> {academic[1]?.degree}
            </p>
          </div>
          <div className="Academic-item AcademicContainer">
            <p>
              <strong>Fecha: </strong>
              {academic[2]?.startDate} - {academic[2]?.endDate}
            </p>
            <p>
              <strong>Institución:</strong> {academic[2]?.institution}
            </p>
            <p>
              <strong>Título:</strong> {academic[2]?.degree}
            </p>
          </div>
          <div className="Academic-item AcademicContainer">
            <p>
              <strong>Fecha: </strong>
              {academic[3]?.startDate} - {academic[3]?.endDate}
            </p>
            <p>
              <strong>Institución:</strong> {academic[3]?.institution}
            </p>
            <p>
              <strong>Título:</strong> {academic[3]?.degree}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Academic;
