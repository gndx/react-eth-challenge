import React from "react";

function Experience({experience,load}){
    return (
        <div className="Experience">
            <h1 className="Experience-title">Experience</h1>
            {load&&experience.map((exp, index) => (<div className="Experience-item" key={index}>
            {exp.jobTitle} - ({exp.company}) <br/>
            {exp.jobDescription} <br/>
            {exp.startDate} - {exp.endDate}
            </div>))}
                
        </div >
    );
}

export {Experience}
