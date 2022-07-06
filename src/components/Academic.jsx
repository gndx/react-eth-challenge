import React from 'react';
import '../styles/components/Academic.styl';

const Academic = (props) => {
  return (
    <div className="Academic">
      <h3>Académico</h3>
      {
        props.data ?
          props.data.map(academicItem => {
            return (
              <>
                <div className="Academic-item">
                  <p>{academicItem.degree}</p>
                  <p>{academicItem.startDate}</p>
                  <p>{academicItem.endDate}</p>
                  <p>{academicItem.institution}</p>
                  <p>{academicItem.description}</p>
                </div>
              </>
            )
          })
        : 
          <></>
      }
    </div>
  );
}

export default Academic;
