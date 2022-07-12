import React, { useContext } from 'react';
import { Context } from './Context';

export default function About() {
  const { data } = useContext(Context);

  return (
    <section className='about'>
      <h2>{data.profession}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque,
        blanditiis! Facilis velit porro aperiam adipisci voluptate soluta quos
        perspiciatis a tempore repellat laudantium, minima libero qui officiis
        aliquid nulla eius?
      </p>
    </section>
  );
}
