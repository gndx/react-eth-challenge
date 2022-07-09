import React from 'react';
import '../styles/components/Academic.styl';

const Academic = ({ data }) => {
  return (
    <div className="Academic">
      <h2 className="Academic-title">Académico</h2>
      <ul>
      {
        data ?
          data.map((academicItem,index) => {
            return (
                  <li key={index} className="Academic-item">
                    {academicItem.startDate}
                    {academicItem.degree}
                    {academicItem.institution}
                    {academicItem.description}
                  </li>
            )
          })
        : 
          <li>Cargando data...</li>
      }
      </ul>
    </div>
  );
}

export default Academic;
