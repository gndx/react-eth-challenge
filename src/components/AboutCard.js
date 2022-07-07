import React from 'react'
import { GiSmartphone, GiPositionMarker } from 'react-icons/gi'
import { GoMail } from 'react-icons/go'
import { MdWeb } from 'react-icons/md'

export default function Card({ type, content }) {
  const setIcon = (type) => {
    switch (type) {
      case 'email':
        return <GoMail size='24px' />
      case 'website':
        return <MdWeb size='24px' />
      case 'phone':
        return <GiSmartphone size='24px' />
      case 'address':
        return <GiPositionMarker size='24px' />
      default:
        return <div>Default</div>
    }
  }
  return (
    <div className='Card'>
      <div className='Card-container'>
        <div className='Card-title'>
          {setIcon(type)}
          <h4>{type}</h4>
        </div>
        <span>{content}</span>
      </div>
    </div>
  )
}
