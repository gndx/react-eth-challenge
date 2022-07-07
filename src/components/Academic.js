import React from 'react';
import AcademicCard from './AcademicCard';

export default function Academic({ academic = [{}], certificate = [{}, {}] }) {
  return (
    <article className='Academic'>
      <div className='Academic-container'>
        <h2 className='Academic-title'>Estudios</h2>
        <ul>
          <h3>Académico</h3>
          {academic[0].degree && academic?.sort((a, b) => new Date(b.endDate) - new Date(a.endDate))?.map((item, index) => (
            <li key={`academic-${item.endDate}`} className='Academic-item'>
              <AcademicCard item={item} />
            </li>
          ))}
          <h3>Certificados</h3>
          {certificate[0].name && certificate?.sort((a, b) => new Date(b.endDate) - new Date(a.endDate))?.map((item, index) => (
            <li key={`academic-${item.endDate}`} className='Academic-item'>
              <AcademicCard item={item} />
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
