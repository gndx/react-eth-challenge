import React, { useContext } from 'react';
import dateFormat from '../../utils/dateFormat';
import AppContext from '../../context/AppContext';
import Content from '../Content';

/** Shows Experience information from data context*/
const Experience = () => {
  const data = useContext(AppContext);
  //set inital layout
  const initalContent = data.experience ? data.experience : [0, 1, 2];
  // Get filtered data
  const experience = (dataExperience) => {
    const { startDate, endDate, company, jobTitle, jobDescription } =
      dataExperience;
    const dateExperience = dateFormat(startDate, endDate);
    return { company, dateExperience, jobTitle, jobDescription };
  };
  return (
    <section className='experience'>
      <h2 className='Experience-title'>Experience</h2>
      {initalContent.map((item) => (
        <div key={item.id} className='Experience-item'>
          <Content data={data.experience && experience(item)} />
        </div>
      ))}
    </section>
  );
};

export default Experience;
