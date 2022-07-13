import React, {useContext} from 'react';
import { Context } from '../containers/App';


const Experience = () => {
  
  const data = useContext(Context);

  return (
    <>
    <h1 className='Experience-title'>Experience</h1>
      {data.experience? (
        data.experience.map((info, i) => {
          return (
            <ul key={i}>
            <li className="Experience-item">
              <h3>{info.company}</h3>
              <small> Description: {info.jobDescription}</small>
            </li>
            </ul>
          );
        })
      ) : (
        <>
        <h1 className={'Experience-item'}></h1>
        <h1 className={'Experience-item'}></h1>
        <h1 className={'Experience-item'}></h1>
      </>
      )}
    </>
  );
};

export default Experience;
