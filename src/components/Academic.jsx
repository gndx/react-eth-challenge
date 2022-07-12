import React, { useContext } from 'react';
import { Context } from '../containers/App';

const Academic = () => {
  const data = useContext(Context);

  return (
    <>
      <h1 className="Academic-title">Academic</h1>
      {data.academic ? (
        data.academic.map((info, i) => {
          return (
            <ul>
              <li key={i} className="Academic-item">
                <h3>{info.degree}</h3>
                <small>Description: {info.description}</small><br></br>
                <small>Institution: {info.institution}</small><br></br>
                <small>End date: {info.endDate}</small>
              </li>
            </ul>
          );
        })
      ) : (
        <>
          <h1 className={'Academic-item'}></h1>
          <h1 className={'Academic-item'}></h1>
          <h1 className={'Academic-item'}></h1>
        </>
      )}
    </>
  );
};

export default Academic;
