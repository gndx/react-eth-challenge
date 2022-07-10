import React from 'react';

export default function Languages({ languages = [] }) {
  return (
    <div className='grid mt-40 mob:mt-2 laptop:mt-40 mob:p-2 laptop:p-0'>
      <h1 className='Languages-title text-2xl text-bold'>.Languages.title</h1>
      {languages.map((languagesItems, index) => (
        <div>
          <p>
            {languagesItems.name}
          </p>
          <p>
            {languagesItems.percentage}
          </p>
        </div>
      ))}
    </div>
  );
}
