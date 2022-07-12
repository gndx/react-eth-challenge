import React, {useContext} from 'react'
import { Context } from '../containers/App';

const Certificate = () => {

    const data = useContext(Context);

    return (
        <>
          <h1 className="Certificate-title">Certificates</h1>
          {data.certificate? (
            data.certificate.map((info, i) => {
              return (
                <ul key={i}>
                <li className="Certificate-item">
                  <h1>{info.name}</h1>
                  <small>Description: {info.description}</small><br></br>
                  <small>Institution: {info.institution}</small><br></br>
                  <small>Date: {info.date}</small>
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
}

export default Certificate