import React, {useEffect, useState} from 'react'
import {getData} from "../utils/getData"

export default function Skills() {

  const [skills, setSkills] = useState([])

  useEffect(async() => {
    const { skills } = await getData('http://localhost:3000/data');
    setSkills(skills);
  }, [])

  return (
    <div className="skills">
      <h4 className="Skills-title">Skills</h4>
      {skills.map((item, i) => (
        <div key={i} className="Skills-item">
          Skill {item.name} / Percentage {item.percentage}
        </div>
      ))}
    </div>
  );
}
