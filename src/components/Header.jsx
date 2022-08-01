import React from 'react';

function Header(props) {
  const { data, children } = props;

  return (
    <section className='Header'>
      <article className='Header-avatar'>
        <img src={data?.avatar} alt='avatar' className='avatar' />
      </article>
      <article className='Header-box'>
        <h1 className='Header-title'>{data?.name}</h1>
        <h3 className='Header-job-title'>{data?.profession}</h3>
        {children}
      </article>
    </section>
  );
}

export default Header;
