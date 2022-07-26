import React from 'react';

function Languages({ languages }) {
  if (languages === undefined) {
    languages = [
      {
        name: '',
        nivel: '',
      },
      {
        name: '',
        nivel: '',
      },
    ];
  }
  return (
    <>
      <div className="LanguagesContainer ">
        <div className="section">
          <h4 className="Languages-title">Idiomas:</h4>
          <div className="Languages-item AcademicContainer">
            <p>
              <strong>{languages[0].name}</strong>
            </p>
            <p>
              <strong>Nivel: </strong>
              {languages[0].nivel}
            </p>
          </div>
          <div className="Languages-item AcademicContainer">
            <p>
              <strong>{languages[1].name}</strong>
            </p>
            <p>
              <strong>Nivel: </strong>
              {languages[1].nivel}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Languages;
