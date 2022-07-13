import React, { useContext } from 'react';
import { Context } from './Context';

export default function Skills() {
  const { data } = useContext(Context);

  return (
    <section className='skills'>
        <h2>Skills</h2>
        <div>
          {data.skills.map((skill) => (
            <article key={skill.name} className='skills__item'>
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
            </article>
            )
            )}
          </div>
    </section>
  );
}
