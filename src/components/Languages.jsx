import React from 'react';
import '../styles/components/Language.scss';
const Languages = (props) => {
  const { languages } = props;
  return (
    <div>
      <h2 className="Languages-title">Languages</h2>
        {languages.map((language, index) => (
          <div className="Languages-item" key={index}>
            <h3> {language.name}</h3>
            <div className="language-box">
              <div
                className="language-indicator"
                style={{ width: language.percentage }}
              >
                {language.percentage}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Languages;
