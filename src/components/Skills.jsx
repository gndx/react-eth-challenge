import React from 'react';
import '../styles/skills.css'

const Skills = (props) => {
  const { skills } = props;
  console.log(skills, "soy skills")
  const proficients = skills.filter(item => item.percentage == 'competente')
  console.log("🚀 ~ file: Skills.jsx ~ line 8 ~ Skills ~ proficients", proficients)
  const familiar = skills.filter(item => item.percentage == 'familiarizado')
  console.log("🚀 ~ file: Skills.jsx ~ line 10 ~ Skills ~ familiar", familiar)
  return (
    <>
    <div className="container">
      <div className="container-left">
    <h3 className="Skills-title">
      Skills
    </h3>
    </div>
    <div className="skills-container-right">
    <div className="skills-right">
    <h3 className="subtitle"> Compentente: </h3>
    <div className="skills-right-items">
  {proficients.map((item, index) => 
  <React.Fragment key={index}><p className='Skills-item' key={index} >{item.name}</p>
  </React.Fragment>) }
  </div>
  </div>
  <div className="skills-container-right">
    <div className="skills-right">
      <h3 className="subtitle">Familiarizada con: </h3>
      <div className="skills-right-items">
  {familiar.map((item, index) => 
  <React.Fragment key={index}><p className='Skills-item' key={index} >{item.name}</p>
  </React.Fragment>) }
    </div>
    </div>
    </div>
    </div>
    </div>
    </>
  )
};
 export default Skills;