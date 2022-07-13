import React from 'react'
import { useAppContext} from '../context/AppContext';
function capitalize(s)
{
    return s[0].toUpperCase() + s.slice(1);
}

const Interest = () => {
  const { interest } = useAppContext();
  return (
    <div className='container width_50 margin-right-0'>
        <h1 className='Interest-title'>Interest</h1>
        <ul className='margin_top_10' style={ {listStyle: 'circle', marginLeft: 25}} >
          { interest.map( (i) => (
            <li key={i} className='Interest-item'>
              {capitalize(i)}
            </li>
          )) 
          }
        </ul>
    </div>
  )
}

export default Interest 