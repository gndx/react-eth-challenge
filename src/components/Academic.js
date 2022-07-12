import React, { useContext } from 'react';
import AcademicItem from './AcademicItem';
import { Context } from './Context';

export default function Academic() {
  const { data } = useContext(Context);

  return (
    <section className='academic'>
      <div className='container'>
        <h2>Academic</h2>
        {data.Academic.map((item) => (
          <AcademicItem
          key={item.degree}
          degree={item.degree}
          description={item.description}
          endDate={item.endDate}
          startDate={item.startDate}
          institution={item.institution}
          />
          ))}
      </div>
    </section>
  );
}
