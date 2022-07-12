import React from "react";

function Skills({skillsData, load}){
    return (
        <div className="Skills">
            <h1 className="Skills-title">Skills</h1>
            {load&&skillsData.map((skill,index) => (<p className="Skills-item" key={index}>{skill.name}<br/> <progress max="100" value={skill.number} >{skill.percentage}</progress></p> 
            ))}
            
        </div>
    );
}

export {Skills}
