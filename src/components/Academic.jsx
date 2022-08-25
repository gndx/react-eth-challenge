import React from 'react';
import '../styles/components/Academic.scss';

function Academic(props) {
  const { academics } = props;
  return (
    <section>
      <h2 className='Academic-title'>Academic</h2>
      {academics?.map((academic, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div className='Academic-item' key={index}>
          <h3>
            <li>{academic.degree}</li>
          </h3>
          <h4>{academic.institution}</h4>
          <p>{academic.endDate}</p>
        </div>
      ))}
    </section>
  );
}

export default Academic;
