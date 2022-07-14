import React, { useContext } from 'react'
import { DataContext } from '../containers/App'

const Languages = () => {
  
    const data = useContext(DataContext)

    return (
        <div className="card-container">
            <h1 className='Languages-title'></h1>
            <div className='data-cards'>
                {
                    data ? data.languages.map(item => (
                        <div className='Languages-item item-card' key={item.name + item.percentage}>
                            <p className=''><b>language:</b> {item?.name}</p>
                            <p className=''><b>Percentage</b>: {item?.percentage}</p>
                        </div>)
                    )
                        :
                        [1, 2, 3].map(item => <div className='Languages-item item-card' key={item}>loading ...</div>)
                }
            </div>
        </div>
    )
}

export default Languages