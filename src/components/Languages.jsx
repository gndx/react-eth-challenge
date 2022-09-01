import React from 'react'

export default function Languages(props) {
  return (
    <div className='Languages section content is-size-4'>
      <h2 className='Languages-title subtitle is-2'>Languages</h2>
      <ul>
        {props.data.languages.map((language, k) => (
          <li className="Languages-item" key={k}>
            <p className="Languages-item-title">
              {language.name} 
              <br />
            </p>
            <progress className="progress is-small" value={language.percentage} max="100">{language.percentage}%</progress>
              
          </li>
        ))}
      </ul>
    </div>
  )
}
