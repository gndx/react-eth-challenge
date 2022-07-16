import React from 'react';
import '../styles/components/Header.css';

const Header = (props) => {
  const { info } = props;
  return (
    <section className="Header">
      <article className="Header-avatar">
        <img src={info?.avatar} alt="avatar" className='avatar' />
      </article>
      <article className="Header-box">
        <h1 className="Header-title">{info?.name}</h1>
        <h4 className="Header-job-title">{info?.profession}</h4>
        <p className="Header-job-title">{info?.email}</p>
        <p className="Header-job-title">{info?.website}</p>
        <p className="Header-job-title">{info?.address}</p>
      </article>
    </section>
  );
};

export default Header;