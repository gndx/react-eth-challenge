import React from 'react';

import '../styles/components/Header.css';

const Header = (props) => {
    return (
      <section className='Header'>
        <article className='Header-avatar'>
          <img src={props.data?.avatar} alt='avatar' className='avatar' />
        </article>
        <div>
          <h1 className='Header-title'>{props.data?.name}</h1>
          {props.children}
        </div>
      </section>
    )
  };
  
  export default Header;
  