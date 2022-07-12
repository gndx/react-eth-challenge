import React from "react";

const Skills = (props) => {
    return(
        <div className="skills">  
            <div className="Skills-title">Tech Stack</div>

            <div className="Skills-cont">
                {props.data.skills.map((skills, key) => (
                    <p className="Skills-item" key={key}>
                      <li> <img src={skills.logo} alt={skills.name} width="45" height="45"/>
                       </li>
                    </p>      
                    ))}
               
            </div>
        </div>
    );
}

export default Skills;


