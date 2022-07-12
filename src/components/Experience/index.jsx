import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import Content from '../Content';

/** Shows Experience information from data context*/
const Experience = () => {
  const data = useContext(AppContext);
  //set inital layout
  const initalContent = data.experience ? data.experience : [0, 1, 2];
  // Get filtered data
  const experience = (dataExperience) => {
    const { startDate, endDate, company, jobDescription } =
      dataExperience;

    return { company, jobDescription, startDate, endDate };
  };
  return (
    <section className="Experience">
      <h2 className="Experience-title">Experience</h2>
      {initalContent.map((item, i) => (
        <div key={i} className="Experience-item">
          <Content data={data.experience && experience(item)} />
        </div>
      ))}
    </section>
  );
};
export default Experience;