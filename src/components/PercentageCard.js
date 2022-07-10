import React from 'react';

export default function PercentageCard({ name, percentage }) {
  return (
    <div className='mt-5'>
      <p className='text-xl'>
        {name}
      </p>
      <div className='w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700'>
        <div className='bg-blue-600 h-2.5 rounded-full' style={{ width: `${percentage}` }} />
      </div>
    </div>
  );
}
