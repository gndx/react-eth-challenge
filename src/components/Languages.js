import React, { useContext } from 'react';
import { Context } from './Context';

export default function Languages() {
  const { data } = useContext(Context);

  return (
    <section className='languages'>
      <h2>Languages</h2>
      <ul>
        {data.languages.map((language) => <li key={language.name}>{language.name}</li>)}
      </ul>
    </section>
  );
}
