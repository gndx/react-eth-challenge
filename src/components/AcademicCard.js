import React from 'react';

export default function AcademicCard({ institution, description }) {
  return (
    <div className='w-full p-4 mob:p-2 rounded-lg transition-all ease-out duration-300 hover:bg-slate-50 hover:scale-105 cursor-pointer mt-5'>
      <h1 className='text-3xl'>
        {institution}
      </h1>
      <p className='mt-5 opacity-40 text-xl'>
        {description}
      </p>
    </div>
  );
}
