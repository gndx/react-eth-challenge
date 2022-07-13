import React, {useContext} from 'react';
import { Context } from '../containers/App';


const Languages = () => {
  
  const data = useContext(Context);

  return (
    <>
      <h1 className="Languages-title">Languages</h1>
      {data.languages? (
        data.languages.map((info, i) => {
          return (
            <ul key={i}>
            <li className="Languages-item">
              <h1>{info.name}</h1>
              <small>{info.level}</small>
            </li>
            </ul>
          );
        })
      ) : (
        <>
        <h1 className={'Languages-item'}></h1>
        <h1 className={'Languages-item'}></h1>
        <h1 className={'Languages-item'}></h1>
      </>
      )}
    </>
  );
};

export default Languages;
