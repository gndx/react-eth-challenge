import React, { useContext } from 'react';
import AcademicItem from './AcademicItem';
import { Context } from './Context';

export default function Academic() {
  const { data } = useContext(Context);

  return (
    <section className='academic' id='Academic'>
        <h2>Academic</h2>
        <div>
        {data.Academic.map((item) => (
          <AcademicItem
          key={item.degree}
          degree={item.degree}
          endDate={item.endDate}
          startDate={item.startDate}
          institution={item.institution}
          />
          ))}
        </div>
    </section>
  );
}
