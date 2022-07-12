import React from "react";

function Academic({academicData,load}){
    return (
        <div className="Academic">
            <h1 className="Academic-title">Academic</h1>
            {load&&academicData.map((academic,index) => <p className="Academic-item" key={index}>{academic.degree} - ({academic.institution})
            <br/>
            {academic.description}<br/>
            {academic.startDate} - {academic.endDate}
            </p>)}
        </div>
    );
}

export {Academic}
