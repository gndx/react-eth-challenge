import React, { useContext } from 'react'
import { DataContext } from '../containers/App'

const Skills = () => {
  
    const data = useContext(DataContext)

    return (
        <div className="card-container">
            <h1 className='Skills-title'>My Skills</h1>
            <div className='data-cards'>
                {
                    data ? data.skills.map(item => (
                        <div className='Skills-item item-card' key={item.name + item.percentage}>
                            <p className=''><b>Name:</b> {item?.name}</p>
                            <p className=''><b>Percentage</b>: {item?.percentage}</p>
                        </div>)
                    )
                        :
                        [1, 2, 3].map(item => <div className='Skills-item item-card' key={item}>loading ...</div>)
                }
            </div>
        </div>
    )
}

export default Skills