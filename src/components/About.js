import React, { useContext } from 'react';
import { Context } from './Context';

export default function About({ children }) {
  const { data } = useContext(Context);

  return (
    <section className='about' id='About'>
      <div className='container'>
        <div>
          <h2>
            discover
            <span>About me</span>
          </h2>
        </div>
        <div>
          <h3>{data.profession}</h3>
          <p>{data.Profile}</p>
          {children}
        </div>
      </div>
    </section>
  );
}
