import React from 'react'
import db from '../../data.json';

const About = () => {
  return (
      <div className='p-2 m-5 grid grid-cols-1 md:grid-cols-2'>
        <div className='p-2'>
          <img src={db.data.avatar} className='h-44 w-44 rounded-full shadow m-auto'></img>
        </div>
        <div className='p-2 flex flex-col justify-evenly'>
          <p className='About-title text-xl font-bold'>{db.data.name}</p>
          <p className='About-item text-lg'>{db.data.profession}</p>
          <p className='About-item '>{db.data.address}</p>
          <div className='flex justify-between w-8/12'>
            {db.data.social.map(
              s =>
              <a key={s.name} className='About-item' href={s.url}>{s.name}</a>
            )}
            <a className='About-item' href={db.data.website}>website</a>
            <a className='About-item' href={`mailto:${db.data.email}`} type='email'>email</a>
          </div>
        </div>
      </div>
  )
}

export default About