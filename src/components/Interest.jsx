import React, { useContext } from 'react'
import AppContext from '../context/context'

const Interest = () => {
  const {
    interest
  } = useContext(AppContext)

  console.log(interest);
  return (
    <div>
      <h1 className="Interest-title">Interests</h1>
      <ul>
        {
          interest?.map((int, index) => (
            <li className="Interest-item" key={int+index}>
              <span>{int}</span>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Interest