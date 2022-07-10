import React from 'react';
import "./AcademicItem.scss";

const AcademicItem = ({className, career, institution, institutionUrl, date, type}) => {
    
    return (
        <li className={className}>
            <h3>{career}</h3>
            <strong><a href={institutionUrl} target="_blank" title={institution}>{institution}</a></strong>
            <time> / {date}</time>
            <p>{type}</p>
        </li>
    );
}

export default AcademicItem;