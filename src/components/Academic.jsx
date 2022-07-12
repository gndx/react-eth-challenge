import React from 'react';
import AcademicItem from './items/AcademicItem';
import '../styles/components/Academic.styl';

function Academic() {
  return (
    <section className='Academic'>
      <h2 className='Academic-title'>Academic History</h2>
      <div className='Academic-items'>
        <AcademicItem className='Academic-item' />
        <AcademicItem className='Academic-item' />
        <AcademicItem className='Academic-item' />
        <AcademicItem className='Academic-item' />
      </div>
    </section>
  );
};

export default Academic;
