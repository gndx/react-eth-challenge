import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../styles/components/Languages.styl';

const Languages = () => {
    const data = useContext(AppContext);
    const languages = data.languages ? data.languages : [0,1,2];
    return (
        <section className="Languages">
            <div className="Languages-content">
              <h2 className="Languages-title">Languages</h2>
              <ul>
                {
                  languages.map((language,i) => {
                    return ( 
                      <li key={i} className="Languages-item">
                        <p>{language.name}</p>
                        <p>{language.percentage}</p>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
        </section>
    )
};

export default Languages;
