import React from 'react';

function Academic({ academic }) {
  return (
    <>
      <div className="AcademicContainer">
        <div className="section">
          <h4>Academico:</h4>
          {academic === undefined
            ? 'Loading...'
            : academic.map((academic, index) => {
                return (
                  <div className="AcademicContainer" key={index}>
                    <p>
                      <strong>Fecha: </strong>
                      {academic.startDate} - {academic.endDate}
                    </p>
                    <p>
                      <strong>Institución:</strong> {academic.institution}
                    </p>
                    <p>
                      <strong>Título:</strong> {academic.degree}
                    </p>
                  </div>
                );
              })}
        </div>
      </div>
    </>
  );
}

export default Academic;
