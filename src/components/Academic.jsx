import React from 'react';
import { Boxing } from '../styles/components/Academic'

const Academic = (props) => {
  const { data = new Array(3).fill('No academic title yet') } = props;
  return (
    <Boxing>
      <section className="Academic">
        <h2 className="Academic-title">Academic</h2>
        {data.map((item, i) => (
          <div className='Academic-item'>
            <h4>{item.institution}</h4>
            <b>
            {item.degree}
            </b>
            <h5>{item.startDate} - {item.endDate}</h5>
            <p>{item.description}</p>
          </div>
        ))}
      </section>
    </Boxing>
  );
};

export default Academic;