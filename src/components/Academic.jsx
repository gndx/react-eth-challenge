import React from 'react';

const Academic = ({ academic }) => {
  return (
    <div>
      <h1 className="Academic-title">Academic</h1>
      <div className="experience-container-items">
        {academic ? academic.map((items) => (
          <div className='single-item-academic' key={`${items.startDate}-${items.company}`}>
            <h2 className='Academic-item'>{items.degree}</h2>
            <h4 className='Academic-item'>{items.institution}</h4>
            <div className='Academic-item'>{items.description}</div>
            <div className='Academic-item'>
              {items.startDate}
              {' '}
              -
              {' '}
              {items.endDate}
            </div>
          </div>
        )) : ''}
      </div>
    </div>
  );
};

export default Academic;
