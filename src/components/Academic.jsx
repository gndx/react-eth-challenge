import React from 'react';
import Item from './Item';

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
          <Item
            className='Academic-item'
            title={degree}
            sub={institution}
            description={description}
            date={`${startDate}-${endDate}`}
            key={`academic-${index}`}
          />
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
          <Item
            className='Certificate-item'
            title={name}
            sub={institution}
            description={description}
            date={date}
            key={`certificate-${index}`}
          />
        ))
      }
    </section>
  );
}

export default Academic;
