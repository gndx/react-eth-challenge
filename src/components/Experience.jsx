import React from 'react'
import '../styles/components/Experience.styl'

const Experience = ({data}) => {

  return (
    <div className="Experience-container">
      <h1 className="Experience-title">Experience</h1>
        <li className="Experience-list">
          {data.map((item,idx) => {
              return (
                  <ul key={idx} className="Experience-item">
                    <div>
                      <span className="Experience-item_jobtitle">
                        {item['jobTitle']}
                      </span>
                      <span> - </span>
                      <span className="Experience-item_company">
                        {item['company']}
                      </span>
                      <span>{`(${item['startDate']} - ${item['endDate']})`}</span>
                    </div>
                    <p className="Experience-item_desc">{item['jobDescription']}</p>
                  </ul>
              );
            })}
        </li>
    </div>
  )
}

export default Experience