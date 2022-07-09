import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import Content from '../Content';
import dateFormat from '../../utils/dateFormat.js';

const Experience = () => {
  const data = useContext(AppContext);
  const initalContent = data.experience ? data.experience : [0, 1, 2];
  const experience = (dataExperience) => {
    const { startDate, endDate, company, jobTitle, jobDescription } =
      dataExperience;
    const dateExperience = dateFormat(startDate, endDate);
    return { company, dateExperience, jobTitle, jobDescription };
  };
  return (
    <section className="experience">
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
