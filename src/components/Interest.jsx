import React from 'react';
import InterestItem from './items/InterestItem';
import '../styles/components/Interest.styl';

function Interest({ data }) {
  return (
    <section className='Interest'>
      <h2 className='Interest-title'>Interest</h2>
      <div className='Interest-items'>
        {data?.map((item, index) => <InterestItem className='Interest-item' key={`${index + 1}-interest`} item={item} />)}
      </div>
    </section>
  );
};

export default Interest;
