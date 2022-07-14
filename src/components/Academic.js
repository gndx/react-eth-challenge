import React from 'react';

export default function Academic({ academic = ['', '', ''] }) {
  return (
    <div className='bg-teal-700 p-5 lg:p-10 rounded-xl border border-gray-900 shadow-xl mt-5 w-full'>
      <h2 className='Academic-title text-4xl font-bold'>Academic</h2>
      <div className='mt-10 grid gap-4'>
        {academic.map((academicItems, index) => (
          <div
            className='w-full p-4 mob:p-2 rounded-lg transition-all ease-out duration-300 hover:bg-slate-50 hover:scale-105 cursor-pointer hover:text-teal-800'
            // eslint-disable-next-line react/no-array-index-key
            key={index}
          >
            <h3 className='Academic-item text-3xl'>{academicItems.institution}</h3>
            <p className='opacity-80 text-xl'>
              {academicItems.description}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}
