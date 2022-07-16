import React from 'react';

export const Academic = ({academic}) => {
    return (
      <section className="academic-section">
        <h2 className="Academic-title">Academic</h2>
        <ul>
          {
            academic?.map((place, index) => (
                <li key={`${index}`} className="Academic-item">
                    <h3>{place.degree}</h3>
                    <p>{place.description}</p>
                    <h4>{place.institution}</h4>
                </li>
            ))
          }
        </ul>
      </section>
    );
  };
