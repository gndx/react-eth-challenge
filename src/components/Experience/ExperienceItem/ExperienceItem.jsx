import React from 'react';
import "./ExperienceItem.scss";

const ExperienceItem = ({
    position, 
    company, 
    companyUrl, 
    date, 
    description,
    className}) => {
    
    return (
        <li className={className}>
            <h3>{position}</h3>
            <strong><a href={companyUrl} target="_blank" title={company} >{company}</a></strong>
            <time> / {date}</time>
            <p>{description}</p>
        </li>
    );
}

export default ExperienceItem;