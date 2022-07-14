import React from 'react';

export default function Interest({ interest = ['', '', ''] }) {
  return (
    <div className='bg-teal-700 p-5 lg:p-10 rounded-xl border border-gray-900 shadow-xl mt-5 w-full'>
      <h2 className='Interest-title text-4xl font-bold'>
        Interest
      </h2>
      <div className='flex'>
        {interest.map((interestItems, index) => (
          <div className='mob:text-sm laptop:text-base p-2 mob:p-1 laptop:p-2 m-2 mob:m-1 laptop:m-2 rounded-lg flex items-center transition-all ease-out duration-300 hover:bg-slate-100 hover:scale-105 active:scale-100 hover:text-teal-800  first:ml-0'>
            <p className='Interest-item mt-3 text-xl'>{interestItems}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
