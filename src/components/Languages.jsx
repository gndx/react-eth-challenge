import React from 'react'

const Languages = ({ data = {} }) => {
  return (
    <div className="Languages-container col-6">
      <h2 className="Languages-title title">Languages</h2>
      <div className="row">
        {data.languages.map((language) => (
          <div className="Languages-item col-12 col-md-4" key={language.name}>
            <h5 className='subtitle'>{language.name}</h5>
            <p>{language.level}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Languages
