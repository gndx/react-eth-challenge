import React from 'react';

function Languages({ languages }) {
  return (
    <>
      <div className="LanguagesContainer ">
        <div className="section">
          <h4>Idiomas:</h4>
          {languages === undefined
            ? 'Loading...'
            : languages.map((language, index) => {
                return (
                  <div className="AcademicContainer" key={index}>
                    <p>
                      <strong>{language.name}</strong>
                    </p>
                    <p>
                      <strong>Nivel: </strong>
                      {language.nivel}
                    </p>
                  </div>
                );
              })}
        </div>
      </div>
    </>
  );
}

export default Languages;
