import React, { useContext } from 'react';
import { Context } from './Context';

export default function Skills() {
  const { data } = useContext(Context);

  return (
    <section className='skills'>
      <h2>Skills</h2>
      <ul>
        {data.skills.map((skill) => <li key={skill.name}>{skill.name}</li>)}
      </ul>
    </section>
  );
}
