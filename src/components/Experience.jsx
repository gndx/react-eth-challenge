import React from 'react';
import '../styles/components/Item.styl';

function Experience({
    experience = Array(3).fill({
      company: '',
      endDate: '',
      jobDescription: '',
      jobTitle: '',
      startDate: '',
    }),
  }){
    const listItems = experience.map((item) =>
        <li key={item.company+item.startDate} className="Experience-item">
            <h4>{item.company}</h4>
            <div>{item.jobTitle}</div>
            <div>{item.startDate} - {item.endDate}</div>
            <p>{item.jobDescription}</p>
        </li>
    );

    return (
        <profile>
            <div className="Item-title Experience-title">
                <p>EXPERIENCE</p>
            </div>
            <div className="Item-content">
                <ul>{listItems}</ul>
            </div>
        </profile>
    );
}

export default Experience;