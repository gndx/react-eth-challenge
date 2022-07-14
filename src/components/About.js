import React from 'react';

export default function About({ profession = 'profession', social = [], address = 'address', phone = 'phone', email = 'email', website = 'website', name = 'name', img = 'image' }) {
  return (
    <div className='bg-teal-700 p-5 lg:p-10 rounded-xl border border-gray-900 shadow-xl lg:flex'>
      <div className='w-56 flex-shrink-0 mx-auto'>
        <div className='rounded-full border-2 border-gray-700 overflow-hidden w-48 h-48 mx-auto lg:mx-0'>
          <img
            alt='avatarimage'
            className='w-full h-full object-cover'
            src={img}
          />
        </div>
      </div>
      <div className='w-full mt-5 lg:mt-0'>
        <h2 className='About-title text-4xl font-bold'>{name}</h2>
        <h3 className='text-2xl font-bold mt-1'>{profession}</h3>
        <ul className='flex justify-start flex-wrap pl-0'>
          <li className='About-item pr-8 pb-2'>
            <a href={`tel:${phone}`}>{phone}</a>
          </li>
          <li className='About-item pr-8 pb-2'>
            <a href={`mailto:${email}`}>{email}</a>
          </li>
          <li className='About-item pr-8 pb-2'>
            <a href={website}>{website}</a>
          </li>
        </ul>
        <address>{address}</address>
        <div className='flex'>
          {social.map((socialMedia, index) => (
            <div className='About-item mob:text-sm laptop:text-base p-2 mob:p-1 laptop:p-2 m-2 mob:m-1 laptop:m-2 rounded-lg flex items-center transition-all ease-out duration-300 hover:bg-slate-100 hover:scale-105 active:scale-100 hover:text-teal-800  first:ml-0'>
              <a key={socialMedia.name} href={socialMedia.url}>
                {socialMedia.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
