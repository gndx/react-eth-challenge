import React from 'react';
import '../styles/components/Certifications.scss';

const Certification = (props) => {
  const { certifications } = props;
  return (
    <section>
      <h2 className="certification-title">Certifications</h2>
      <article className="certification-box">
        {certifications?.map((certification, index) => (
          <div className="certification-item" key={index}>
            <p><strong>{certification.name}</strong> - {certification.institution} - {certification.date}</p>
          </div>
        ))}
      </article>
    </section>
  );
};

export default Certification;
