import React from 'react';

export const Certificate = ({ certificates }) => {
  return (
    <section className="certificate-section">
      <h2 className="Certificate-title">Certificates</h2>
      <ul>
        {
          certificates?.map((certification, index) => (
            <li key={`${index}`} className="Certificate-item">
              <p>
                <div><strong>{certification.name}</strong></div>
                <div><em>{certification.date}</em></div>
                <div>{certification.description}</div>
                <div><em>{certification.institution}</em></div>
              </p>
            </li>
          ))
        }
      </ul>
    </section>
  );
};
