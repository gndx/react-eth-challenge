import React from 'react';

const Experience = (props) => {
  const { items = new Array(3).fill('No experience yet') } = props;

  return (
    <section className="Experience">
      <h2 className="Experience-title">Experience</h2>
      <div className="Experience-items">
        {items.map((item, index) => (
          <ul key={`experience-item-${index}`} className="Experience-item">
            <h4 className="job-title">
              <li>
                {item?.jobTitle} - {`${item?.startDate} - ${item?.endDate}`}
              </li>
            </h4>
            <p className="job-company">{item?.company}</p>
            <p className="job-descr">Stack: {item?.jobDescription}</p>
          </ul>
        ))}
      </div>
    </section>
  );
};

export default Experience;
