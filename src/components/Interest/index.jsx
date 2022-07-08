import React, {useContext} from 'react';
import AppContext from '../../context/AppContext';
import Content from '../Content';

const Interest = () => {
  const data = useContext(AppContext);
  const initalContent = [0, 1, 2];
  return (
    <section className="interest">
      <h1 className="Interest-title">Interest</h1>
      {initalContent.map((i) => (
        <div key={i} className="Interest-item">{data.interest && data.interest[i]}</div>
      ))}
    </section>
  );
}

export default Interest;