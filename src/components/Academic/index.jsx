import React from 'react';

export const Academic = ({academic}) => {
    return (
      <section className="academic-section">
        <h2 className="Academic-title">Academic</h2>
        <ul>
          {
            academic?.map((place, index) => (
                <li key={`${index}`} className="Academic-item">
                  <div>
                      <div><strong>{place.degree}</strong></div>
                      <div>{place.description}</div>
                      <div><em>{place.institution}</em></div>
                      <br />
                  </div>
                </li>
            ))
          }
        </ul>
      </section>
    );
  };
