import React from 'react'
import '../styles/components/Academic.styl'

const Academic = ({data}) => {

  return (
    <div className="Academic-container">
      <h1 className="Academic-title">Academic</h1>
      <li className="Academic-list">
      {data.map((item,idx) => {
        return (
          <ul key={idx} className="Academic-item">
            <div>
              <span className="Academic-degree">{item['degree']}</span>
              <span> - </span>
              <span className="Academic-institution">{item['institution']}</span>
            </div>
            <span className="Academic-start_end">{`(${item['startDate']} - ${item['endDate']})`}</span>
            <span className="Academic-desc">{item['description']}</span>
          </ul>
        );
      })}
      </li>
    </div>
  )
}

export default Academic