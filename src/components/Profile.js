import React from 'react';

export default function ({ profile = 'profile' }) {
  return (
    <div className='bg-teal-700 p-5 lg:p-10 rounded-xl border border-gray-900 shadow-xl mt-5'>
      <h2 className='Profile-title text-4xl font-bold'>
        Profile
      </h2>
      <p className='Profile-desc text-4xl mob:text-3xl laptop:text-4xl mob:p-2 w-full text-bold mob:w-full laptop:w-4/5 mt-10'>
        {profile}
      </p>
    </div>
  );
}
