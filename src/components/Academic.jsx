import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../styles/components/Academic.styl';

const Academic = () => {
    const data = useContext(AppContext);
    const academics = data.Academic ? data.Academic : [0,1,2];
    return (
        <section className="Academic">
          <div className="Academic-content">
            <h2 className="Academic-title">Academic Information</h2>
            <ul>
              {
                academics.map((academic,i) => {
                  return (    
                    <li key={i} className="Academic-item">
                      <p>{academic.degree}</p>
                      <p>{academic.startDate} - {academic.endDate}</p>
                      <p>{academic.description}</p>
                      <p>{academic.institution}</p>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </section>
    )
};

export default Academic;
