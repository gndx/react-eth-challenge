import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../styles/components/Interest.styl';

const Interest = () => {
    const data = useContext(AppContext);
    const interests = data.interest ? data.interest : [0,1,2];
    return (
        <section className="Interest">
          <div className="Interest-content">
            <h2 className="Interest-title">Interest</h2>
            <ul>
              {
                interests.map((interest,i) => {
                  return ( 
                    <li key={i} className="Interest-item">
                      <p>{interest}</p>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </section>
    )
};

export default Interest;
