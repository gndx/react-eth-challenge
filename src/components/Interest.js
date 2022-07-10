import React from 'react';
import InterestItem from './InterestItem';

export default function Interest({ interest = [] }) {
  return (
    <div className='grid mt-40 mob:mt-2 laptop:mt-40 mob:p-2 laptop:p-0'>
      <h1 className='Interest title text-4xl mob:text-3xl laptop:text-4xl mob:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5'>
        .Interest-title
      </h1>
      <div className='flex gap-2'>
        {interest.map((interestItems, index) => (
          <InterestItem
            className='interest-item'
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            interest={interestItems}
          />
        ))}
      </div>
    </div>
  );
}
