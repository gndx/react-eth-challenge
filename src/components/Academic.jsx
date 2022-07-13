import React from 'react'
import { useAppContext} from '../context/AppContext';

const Academic = () => {
  const { Academic } = useAppContext();
  return (
    <div className='container width_50 margin-right-0'>
        <h1 className='Academic-title'>Academic</h1>
        <ul className='margin_top_10'>
          { Academic.map( ({degree, description, institution, startDate, endDate}) => (
            <li key={degree} className='Academic-item'>
              <h3>{ degree } - {institution}</h3>
              <p>{description}</p>
              <span>{startDate} - {endDate}</span>
            </li>
          )) 
          }
        </ul>
    </div>
  )
}

export default Academic;


