import React, {useContext} from 'react';
import { Context } from '../containers/App';

const Social = () => {

  const data = useContext(Context)

  return (
    <>
      <h1>Social Media</h1>
      {data.social? (
        data.social.map((info, i) => {
          return (
            <ul>
            <li key={i}>
             <h3>{info.name}</h3><br></br>
             <small>{info.url}</small>
            </li>
            </ul>
          );
        })
      ) : (
        <>
        </>
      )}
    </>
  );
};

export default Social;
