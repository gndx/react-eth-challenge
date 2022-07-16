import React from 'react';

export const Certificate = ({ certificates }) => {
  return (
    <section className="certificate-section">
      <h2 className="Certificate-title">Certificate</h2>
      <ul>
        {
          certificates?.map((certification, index) => (
            <li key={`${index}`} className="Certificate-item">
              <h3>{certification.date}</h3>
              <h3>{certification.name}</h3>
              <p>{certification.description}</p>
              <h4>{certification.institution}</h4>
            </li>
          ))
        }
      </ul>
    </section>
  );
};
