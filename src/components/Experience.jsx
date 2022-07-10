import React, { useEffect, useState } from 'react';
import { getData } from '../utils/getData';

export default function Experience() {
  const[experience, setExperience] = useState([])

  useEffect(async () => {
    const { experience } = await getData('http://localhost:3000/data');
    setExperience(experience);
  }, []);

  return (
    <div className="experience">
      <h4 className="Experience-title">Experience</h4>
      <div className="list-experiences">
        {experience.map((item, i) => (
          <div className="Experience-item" key={i}>
            Company: {item.company} / Period: {item.startDate} - {item.endDate}{' '}
            / Job: {item.jobTitle}
          </div>
        ))}
      </div>
    </div>
  );
}
