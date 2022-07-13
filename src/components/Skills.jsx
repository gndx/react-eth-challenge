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
  <React.Fragment key={index}><li className='Skills-item' key={index} >{item.name}</li>
  <li className='Skills-item' key={index} >{item.percentage}</li></React.Fragment>) }
    </ul>
    </div>
    </>
  )
};
 export default Skills;