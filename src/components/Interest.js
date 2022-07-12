import React, { useContext } from 'react';
import { Context } from './Context';

export default function Interest() {
  const { data } = useContext(Context);

  return (
    <section className='interest'>
      <h2>Interest</h2>
      <ul>
        {data.interest.map((interestName) => <li key={interestName}>{interestName}</li>)}
      </ul>
    </section>
  );
}
