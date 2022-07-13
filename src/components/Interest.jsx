import React, {useContext} from 'react';
import { Context } from '../containers/App';


const Interest = () => {
  
  const data = useContext(Context);

  return (
    <>
      <h1 className="Interest-title">Interest</h1>
      {data.interest? (
        data.interest.map((info, i) => {
          return (
            <ul key={i}>
            <li className="Interest-item">
              {info.name}
            </li>
            </ul>
          );
        })
      ) : (
        <>
        <h1 className={'Interest-item'}></h1>
        <h1 className={'Interest-item'}></h1>
        <h1 className={'Interest-item'}></h1>
      </>
      )}
    </>
  );
};

export default Interest;
