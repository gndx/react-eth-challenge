import React from 'react';


const Skills = (props) => {
  const { skills } = props;
  console.log(skills, "soy skills")
  return (
    <>
    <div className="Skills">
    <div className="Skills-title">
      Skills
    </div>
    <ul>
  {skills.map((item, index) => 
  <li className='Skills-item' >{item.name}</li>) }
    </ul>
    </div>
    </>
  )
};
 export default Skills;