import React from 'react';
import AcademicItem from './items/AcademicItem';
import '../styles/components/Academic.styl';
import CompleteData from '../../data.json';

function Academic() {
  const { data } = CompleteData;
  return (
    <section className='Academic'>
      <h2 className='Academic-title'>Academic History</h2>
      <div className='Academic-items'>
        {data.certificate.map((item, index) => <AcademicItem className='Academic-item' key={`${index + 1}-academic`} item={item} />)}
      </div>
    </section>
  );
};

export default Academic;
