import React, {useContext} from 'react';
import AppContext from '../../context/AppContext';
import Content from '../Content';

const Languages = () => {
  const data = useContext(AppContext);
  const initalContent = [0, 1, 2];
  return (
    <section className="languages">
      <h1 className="Languages-title">Languages</h1>
      {initalContent.map((i) => (
        <div key={i} className="Languages-item"><Content data = {data.languages && data.languages[i]}/></div>
      ))}
    </section>
  );
}

export default Languages;