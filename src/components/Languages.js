import React from 'react'
import Fill from '../common/Fill'

export default function Languages({ languages = [{}, {}, {}] }) {
  return (
    <aside className='Languages'>
      <h2 className='Languages-title'>Lenguas</h2>
      <ul>
        {languages?.map((item, index) => (
          <li key={`languagues-${item.name}`} className='Languages-item'>
            <h5>{item.name}</h5>
            <div className='Languages-item-container'>
              <Fill amount={`${item.percentage}`}>
                <p>{item.percentage}</p>
              </Fill>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  )
}
