import React from 'react';
import InterestItem from './items/InterestItem';
import '../styles/components/Interest.styl';

function Interest() {
  return (
    <section className='Interest'>
      <h2 className='Interest-title'>Interest</h2>
      <div className='Interest-items'>
        <InterestItem className='Interest-item' />
        <InterestItem className='Interest-item' />
        <InterestItem className='Interest-item' />
        <InterestItem className='Interest-item' />
      </div>
    </section>
  );
};

export default Interest;
