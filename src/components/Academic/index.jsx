import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import Content from '../Content';
const Academic = () => {
  const data = useContext(AppContext);
  const initalContent = [0, 1, 2];
  return (
    <section className="academic">
      <h1 className="Academic-title">Academic Information</h1>
      {initalContent.map((i) => (
        <div key={i} className="Academic-item"><Content data = {data.Academic && data.Academic[i]}/></div>
      ))}
    </section>
  );
};

export default Academic;
