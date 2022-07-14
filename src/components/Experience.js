import React from 'react';

export default function Experience({ experience = ['', '', ''] }) {
  return (
    <div className='bg-teal-700 p-5 lg:p-10 rounded-xl border border-gray-900 shadow-xl mt-5 w-full'>
      <h2 className='Experience-title text-4xl font-bold'>Experience</h2>
      <div className='mt-10 grid lg:grid-cols-2 gap-4'>
        {experience.map((experienceItem, index) => (
          <div
            className='w-full p-4 mob:p-2 rounded-lg transition-all ease-out duration-300 hover:bg-slate-50 hover:scale-105 cursor-pointer hover:text-teal-800'
            // eslint-disable-next-line react/no-array-index-key
            key={index}
          >
            <h3 className='Experience-item text-3xl'>{experienceItem.jobTitle}</h3>
            <p className='text-xl font-semi-bold  mt-2'>{experienceItem.company}</p>
            <p className='text-l opacity-40'>{`${experienceItem.startDate} - ${experienceItem.endDate}`}</p>
            <p className='opacity-80 text-xl'>
              {experienceItem.jobDescription}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
