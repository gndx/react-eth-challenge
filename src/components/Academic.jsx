import React, { useContext } from 'react'
import AppContext from '../context/context'

const Academic = () => {
  const {
    academic
  } = useContext(AppContext)

  return (
    <section>
      <h1 className="Academic-title">Academic</h1>
      <ul>
        {
          academic?.map(({
            endDate,
            degree,
            description,
            institution,
          }, index) => (
            <li className="Academic-item" key={degree+index}>
              <p className="item-title">{degree}</p>
              <p className="item-description">{description}</p>
              <span className='item-description'>{institution}</span>
              <span className='item-description'> {endDate}</span>
            </li>
          ))
        }
      </ul>
    </section>
  )
}

export default Academic