import React from 'react';
import '../styles/components/Academic.styl';

const Academic = ({ data }) => {
  return (
    <div className='Academic'>
      <h2 className='Academic-title'>Academic</h2>
      <ul>
        {
          data ?
            data.map((academicItem) => {
              return (
                <li
                  key={`${academicItem.institution}_${academicItem.startDate}`}
                  className='Academic-item'
                >
                  <h3>
                    {`${academicItem.institution} | `}
                    <span>
                      {academicItem.startDate}
                    </span>
                  </h3>
                  <p>{academicItem.description}</p>
                </li>
              );
            }) : <li>Cargando data...</li>
        }
      </ul>
    </div>
  );
};

export default Academic;
