import React from 'react';

export default function Interest({ interest = [] }) {
  return (
    <div className='grid mt-40 mob:mt-2 laptop:mt-40 mob:p-2 laptop:p-0'>
      <h1 className='Interest title text-2xl text-bold'>
        .Interest-title
      </h1>
      {interest.map((interestItems, index) => (
        <div className='Interest-item'>
          <p>{interestItems}</p>
        </div>
      ))}
    </div>
  );
}
