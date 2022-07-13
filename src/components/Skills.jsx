import React from 'react';


const Skills = (props) => {
  const { skills } = props;
  console.log(skills, "soy skills")
  const proficients = skills.filter(item => item.percentage == 'competente')
  console.log("🚀 ~ file: Skills.jsx ~ line 8 ~ Skills ~ proficients", proficients)
  const familiar = skills.filter(item => item.percentage == 'familiarizado')
  console.log("🚀 ~ file: Skills.jsx ~ line 10 ~ Skills ~ familiar", familiar)
  return (
    <>
    <div className="Skills">
    <div className="Skills-title">
      Skills
    </div>
    <ul>
  {proficients.map((item, index) => 
  <React.Fragment key={index}><li className='Skills-item' key={index} >{item.name}</li>
  </React.Fragment>) }
    </ul>
    <ul>
  {familiar.map((item, index) => 
  <React.Fragment key={index}><li className='Skills-item' key={index} >{item.name}</li>
  </React.Fragment>) }
    </ul>
    </div>
    </>
  )
};
 export default Skills;