import React from 'react';
import './styles.styl';

//const Academic = ({ data }) => {

const Academic = (props) => {
  const { data = new Array(3).fill('No academic title yet') } = props;

  return (
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
  );
};

export default Academic;
