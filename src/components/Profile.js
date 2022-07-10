import React from 'react';

export default function ({ profile = 'profile' }) {
  return (
    <div className='mt-40 mob:mt-2 laptop:mt-40 mob:p-2 laptop:p-0'>
      <h1 className='Profile-title text-6xl mob:text-3xl laptop:text-6xl mob:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5'>
        .Profile-title
      </h1>
      <p className='Profile-desc text-4xl mob:text-3xl laptop:text-4xl mob:p-2 w-full text-bold mob:w-full laptop:w-4/5 mt-10'>
        {profile}
      </p>
    </div>
  );
}
