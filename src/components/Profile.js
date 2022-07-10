import React from 'react';

export default function ({ profile = 'profile' }) {
  return (
    <div className='mt-40 mob:mt-2 laptop:mt-40 mob:p-2 laptop:p-0'>
      <h1 className='Profile-title text-2xl text-bold'>
        .Profile-title
      </h1>
      <p className='Profile-desc'>
        {profile}
      </p>
    </div>
  );
}
