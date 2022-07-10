import React from 'react';
import '../styles/components/App.styl';

const Academic = ({ academic }) => {

  const academics = Array.from(new Set(academic));

  return (
    <div className='Academic'>
      <h2 className='Academic-title subtitle'>Academic</h2>
      {
        academics.map((item) => {
          return (
            <div className='Academic-item' key={item.degree}>
              <div className='colorblue'>
                {item.degree}
              </div>
              <div>
                {item.institution}
              </div>
              <div>
                {`${item.startDate} - ${item.endDate}`}
              </div>
              <div>
                {item.description}
              </div>
            </div>
          );
        })
      }
    </div>
  );
};

export default Academic;
