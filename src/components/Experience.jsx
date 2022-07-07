import React from 'react';
import '../styles/components/Experience.styl';

const Experience = ({data}) => {
  return(
    <div className="Experience">
      <h3 className="Experience-title">Experience</h3>
      <ul>
        {
          data ?
              data.map((experience, index) => {
                return (
                  <li key={index}>
                    <p>{experience.jobTitle}</p>
                    <p>{experience.startDate}</p>
                    <p>{experience.company}</p>
                    <p>{experience.endDate}</p>
                    <p>{experience.jobDescription}</p>
                  </li>
                )
              })
            :
              <>Cargando data...</>
        }
      </ul>
    </div>
  );
}

export default Experience;
