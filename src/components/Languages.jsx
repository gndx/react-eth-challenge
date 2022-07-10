import React, { useContext } from 'react'
import AppContext from '../context/context'

const Languages = () => {
  const {
    languages
  } = useContext(AppContext)

  return (
    <div>
      <h1 className="Languages-title">Languages</h1>
      <ul>
        {
          languages?.map(({
            name,
            percentage
          }, index) => (
            <li className="Languages-item" key={name+index}>
              <span>{name}</span>
              {/* <span>{percentage}</span> */}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Languages