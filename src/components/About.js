import React from 'react';
import Button from './Button';

export default function About({ profession = 'profession', social = [], address = 'address', phone = 'phone', email = 'email', website = 'website', name = 'name', img = 'image' }) {
  return (
    <>
      <div className='mt-10 flex flex-row items-center justify-between sticky bg-black top-0 z-10'>
        <h1 className='font-medium cursor-pointer mob:p-2 laptop:p-0'>
          {name}
        </h1>
        <div className='flex'>
          <Button>Work</Button>
        </div>
      </div>
      <section id='about'>
        <div className='col-md-12'>
          <h1 style={{ color: 'black' }}>
            <span>About Me</span>
          </h1>
          <div className='row center mx-auto mb-5'>
            <div className='col-md-8 mb-5 items'>
              <div className='polaroid'>
                <span style={{ cursor: 'auto' }}>
                  <img
                    height='250px'
                    src={img}
                    alt='Avatar placeholder'
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>

  );
}
