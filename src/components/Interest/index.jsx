import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';

const Interest = () => {
  const data = useContext(AppContext);
  const initalContent = data.interest ? data.interest : [0, 1, 2];
  return (
    <section className="interest">
      <h2 className="Interest-title">Interest</h2>
      {initalContent.map((item, i) => (
        <div key={i} className="Interest-item">
          {data.interest && item}
        </div>
      ))}
    </section>
  );
};

export default Interest;
