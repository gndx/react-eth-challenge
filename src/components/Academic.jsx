import React from 'react';
import AcademicItem from './AcademicItem';
import '../styles/components/Academic.styl';

function Academic({ academics }) {
  return (
    <section className='Academic'>
      <h1 className='Academic-title General-title'>Academic title</h1>
      {academics &&
        academics.map((academic) => (
          <article className='Academic-item' key={academic.degree}>
            <AcademicItem academic={academic} />
          </article>
        ))}
    </section>
  );
}

export default Academic;
