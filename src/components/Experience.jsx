import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../styles/components/Experience.styl';

const Experience = () => {
    const data = useContext(AppContext);
    const experiences = data.experience ? data.experience : [0,1,2];
    return (
        <section className="Experience">
          <div className="Experience-content">
            <h2 className="Experience-title">Experience</h2>
            <ul>
              {
                experiences.map((experience,i) => {
                  return(
                    <li key={i} className="Experience-item">
                      <p>{experience.company}</p>
                      <p>{experience.startDate} - {experience.endDate}</p>
                      <p>{experience.jobTitle}</p>
                      <p>{experience.jobDescription}</p>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </section>
    )
};

export default Experience;
