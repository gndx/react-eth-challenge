import React from 'react';
import Button from './Button';

export default function About({ profession = 'profession', social = [], address = 'address', phone = 'phone', email = 'email', website = 'website', name = 'name', img = 'image' }) {
  return (
    <div className='flex laptop:mt-20 mob:mt-10'>
      <div className='flex-auto'>
        <img
          className='mx-auto mt-10 rounded w-64 h-64'
          src={img}
          alt='avatar profile'
        />
      </div>
      <div className='flex-auto'>
        <div className='mt-5'>
          <h1 className='About-title text-8xl mob:text-3xl laptop:text-8xl mob:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5 mt-4'>
            {name}
          </h1>
          <h1 className='About-item text-5xl mob:text-3xl laptop:text-8xl mob:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5 mt-4'>
            {profession}
          </h1>
          <h1 className='About-item text-3xl mob:text-3xl laptop:text-8xl mob:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5 mt-4'>
            {phone} - {email} - {website}
          </h1>
          <h1 className='text-3xl mob:text-3xl laptop:text-8xl mob:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5 mt-4'>
            {address}
          </h1>
        </div>
        <div className='About-item mt-5 mob:mt-2 laptop:mt-5 flex'>
          {social.map((socialMedia, index) => (
            <Button key={index} onClick={() => window.open(social.url)}>
              {socialMedia.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
