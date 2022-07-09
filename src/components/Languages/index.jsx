import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import Content from '../Content';

/** Shows Languages information from data context*/
const Languages = () => {
  const data = useContext(AppContext);
  //set inital layout
  const initalContent = data.languages ? data.languages : [0, 1, 2];
  return (
    <section className="languages">
      <h2 className="Languages-title">Languages</h2>
      {initalContent.map((item, i) => (
        <div key={i} className="Languages-item">
          <Content data={data.languages && item} />
        </div>
      ))}
    </section>
  );
};

export default Languages;
