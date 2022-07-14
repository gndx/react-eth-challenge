import React, { useContext } from 'react'
import { DataContext } from '../containers/App'

const Experience = () => {

    const data = useContext(DataContext)

    return (
        <div className="card-container">
            <h1 className='Experience-title'>Experience</h1>
            <div className='data-cards'>
                {
                    data ? data.experience.map(item => (
                        <div className='Experience-item item-card' key={item.company + item.jobTitle}>
                            <p className=''><b>Company</b>: {item?.company}</p>
                            <p className=''><b>Job:</b> {item?.jobTitle}</p>
                            <p className=''><b>Description:</b> {item?.jobDescription}</p>
                            <p className=''><b>Started:</b> {item?.startDate}</p>
                            <p className=''><b>End:</b> {item?.endDate}</p>
                        </div>)
                    )
                        :
                        [1, 2, 3].map(item => <div className='Experience-item item-card' key={item}>loading ...</div>)
                }
            </div>
        </div>
    )
}

export default Experience