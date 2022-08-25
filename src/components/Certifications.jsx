import React from 'react';
import '../styles/components/Certifications.scss';

function Certification(props) {
  const { certifications } = props;
  return (
    <section>
      <h2 className='certification-title'>Certifications</h2>
      <article className='certification-box'>
        {certifications?.map((certification, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div className='certification-item' key={index}>
            <p>
              <strong>{certification.name}</strong>
              {' '}
              -
              {' '}
              {certification.institution}
              {' '}
              -
              {' '}
              {certification.date}
            </p>
          </div>
        ))}
      </article>
    </section>
  );
}

export default Certification;
