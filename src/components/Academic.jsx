import React from 'react';

function Academic({ academic = Array(3).fill({
  degree: '',
  description: '',
  endDate: '',
  institution: '',
  startDate: '',
}), certificate = Array(3).fill({
  date: '',
  description: '',
  institution: '',
  name: '',
}) }) {
  return (
    <section>
      <h2 className='Academic-title'>Academic</h2>
      {
        academic.map(({
          degree,
          description,
          endDate,
          institution,
          startDate,
        }, index) => (
          <div className='Academic-item' key={`academic-${index}`}>
            <h3>{degree}</h3>
            <h5>{institution}</h5>
            <p>{description}</p>
            <h5>
              {startDate}
              -
              {endDate}
            </h5>
          </div>
        ))
      }
      <h2 className='Certificate-title'>Certificates</h2>
      {
        certificate.map(({
          date,
          description,
          institution,
          name,
        }, index) => (
          <div className='Certificate-item' key={`certificate-${index}`}>
            <h3>{name}</h3>
            <h5>{institution}</h5>
            <p>{description}</p>
            <h5>{date}</h5>
          </div>
        ))
      }
    </section>
  );
}

export default Academic;
