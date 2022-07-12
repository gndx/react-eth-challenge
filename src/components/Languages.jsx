import React from 'react'
import '../styles/components/Languages.styl'

const Languages = ({data}) => {

  return (
    <div className="Languages-container">
      <h1 className="Languages-title">Languages</h1>
      <li className="Languages-list">
        {data.map((language,idx) => {
          return (
            <ul key={idx} className="Languages-item">
              <span>{language["name"]}</span>
              <span>{language["percentage"]}</span>
            </ul>
          )
        })}
      </li>
    </div>
  )
}

export default Languages