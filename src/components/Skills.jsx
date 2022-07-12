import React, {useContext} from 'react';
import { Context } from '../containers/App';


const Skills = () => {

  const data = useContext(Context);

  return (
    <>
      <h1 className="Skills-title">Skills</h1>
      {data.skills? (
        data.skills.map((info, i) => {
          return (
            <ul>
            <li key={i} className="Skills-item">
             <small>{info.name}</small>
            </li>
            </ul>
          );
        })
      ) : (
        <>
          <h1 className={'Skills-item'}></h1>
          <h1 className={'Skills-item'}></h1>
          <h1 className={'Skills-item'}></h1>
        </>
      )}
    </>
  );
};

export default Skills;
