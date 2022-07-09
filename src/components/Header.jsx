import React from 'react';
import About from './About';
import '../styles/components/Header.scss';

const Header = (props) => {
  const { info } = props;

  return (
    <section className="Header">
      <article className="Header-avatar">
        <img src={info?.avatar} alt="avatar" className='avatar' />
      </article>
      <article className="Header-box">
        <h1 className="Header-title">{info?.name}</h1>
        <h3 className="Header-job-title">{info?.profession}</h3>
      </article>
      <article className="Header-about">
        <About info={info} />
      </article>
    </section>
  );
};

export default Header;
