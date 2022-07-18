import React from 'react';
import {Boxing} from "../styles/components/Experience"

const Experience = (props) => {
  const { data = new Array(3).fill('No experience yet') } = props;
  return (
    <Boxing>
      <section className="Experience">
        <h2 className="Experience-title">Experience</h2>
        {data.map((item, i) => (
          <div key={`Experience-${i}`} className="Experience-item">
            <h4>{item.company}</h4>
            <b>
            {item.jobTitle}
            </b>
            <h5>{item.startDate} - {item.endDate}</h5>
            <p>{item.jobDescription}</p>
          </div>
        ))}
      </section>
    </Boxing>
  );
};

export default Experience;