import React from 'react'

const Languages = ({ data = {} }) => {
  return (
    <div className="Languages-container col-6">
      <h2 className="Languages-title">Languages</h2>
      {data.languages.map((language) => (
        <div className="Languages-item" key={language.name}>
          <h5>{language.name}</h5>
          <p>{language.level}</p>
        </div>
      ))}
    </div>
  )
}

export default Languages
