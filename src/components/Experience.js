import React from "react";

const Experience = (props) => {
    return(
        <div className="experience">  
            <div className="Experience-title">Professional Training</div>
            
            <div>{props.data.experience.map((experience, key) => (
                    <li className="Experience-item" key={key}>
                       {experience.jobTitle} {experience.company}. {experience.jobDescription}
                    </li>    
                    ))}
      
            </div>
        </div>
    );
}

export default Experience;