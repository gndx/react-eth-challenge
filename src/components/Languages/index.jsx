import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import Content from '../Content';

const Languages = () => {
  const data = useContext(AppContext)
  const initalContent = data.languages ? data.languages : [0, 1, 2];
  return (
    <section className='Languages'>
      <h2 className='Languages-title'>Idioms</h2>
      {initalContent.map((item, index) => (
        <div key={index} className="Languages-item">
          <Content data={data.languages && item} />
        </div>
      ))}
    </section>
  )
}

export default Languages