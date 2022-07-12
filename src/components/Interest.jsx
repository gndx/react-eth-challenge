import React from 'react'
import { Interes } from '../styles/components/Interest';

const Interest = () => {
  return (
    <div>
      <h3 className='Interest-title'> Why are my interest? </h3>
      <div>
        <Interes>
          <li className='Interest-item'>Cryotografic</li>
          <li className='Interest-item'>Defi Quant</li>
          <li className='Interest-item'>Trading</li>
          <li className='Interest-item'>Security</li>
          <li className='Interest-item'>Math</li>
        </Interes>
      </div>
    </div>
  )
}

export default Interest;