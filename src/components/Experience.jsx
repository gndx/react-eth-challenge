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
                  <li key={index} className="Experience-item">
                    {experience.jobTitle}
                    {experience.startDate}
                    {experience.company}
                    {experience.endDate}
                    {experience.jobDescription}
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
