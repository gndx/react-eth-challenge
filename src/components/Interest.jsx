import React, { useContext } from 'react'
import { DataContext } from '../containers/App'

const Interest = () => {
  
    const data = useContext(DataContext)

    return (
        <div className="card-container">
            <h1 className='Interest-title'>My Interest</h1>
            <ul>
                {
                    data ? data.interest.map(item => (
                            <li className='Interest-item' key={item}>{item}</li>
                    ))
                    :
                        [1, 2, 3].map(item => <li className='Interest-item' key={item}>loading ...</li>)
                }
            </ul>
        </div>
    )
}

export default Interest