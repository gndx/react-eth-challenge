import React from 'react';
import Button from './Button';

export default function ({ profile = 'profile', social = [] }) {
  return (
    <>
      <div className='mt-40 mob:mt-2 laptop:mt-40 mob:p-2 laptop:p-0'>
        <h1 className='text-2xl text-bold'>
          .Profile-title
        </h1>
        <p>
          {profile}
        </p>
      </div>
      <div className='mt-5 mob:mt-2 laptop:mt-5 flex'>
        {social.map((socialMedia, index) => (
          <Button key={index} onClick={() => window.open(social.url)}>
            {socialMedia.name}
          </Button>
        ))}
      </div>
    </>
  );
}
