import React from 'react';
import AcademicItem from './items/AcademicItem';
import '../styles/components/Academic.styl';

function Academic({ data }) {
  return (
    <section className='Academic'>
      <h2 className='Academic-title'>Academic History</h2>
      <div className='Academic-items'>
        {data.map((item, index) => <AcademicItem className='Academic-item' key={`${index + 1}-academic`} item={item} />)}
      </div>
    </section>
  );
};

export default Academic;
