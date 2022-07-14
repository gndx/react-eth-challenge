import React, { useContext } from 'react'
import { DataContext } from '../containers/App'

const Academic = () => {

    const data = useContext(DataContext)

    return (
        <div className="card-container">
            <h1 className='Academic-title'>Academic</h1>
            <div className='data-cards'>
                {
                    data ? data.academic.map(item => (
                        <div className='Academic-item item-card' key={item.degree + item.institution}>
                            <p className=''><b>Institution:</b> {item?.institution}</p>
                            <p className=''><b>Degree</b>: {item?.degree}</p>
                            <p className=''><b>Description:</b> {item?.description}</p>
                            <p className=''><b>Started:</b> {item?.startDate}</p>
                            <p className=''><b>End:</b> {item?.endDate}</p>
                        </div>)
                    )
                        :
                        [1, 2, 3].map(item => <div className='Academic-item item-card' key={item}>loading ...</div>)
                }
            </div>
            <h3>Certificates</h3>
            <div className='data-cards'>
                {
                    data ? data.certificate.map(item => (
                        <div className='Academic-item item-card' key={item.name + item.institution}>
                            <p className=''><b>Institution:</b> {item?.institution}</p>
                            <p className=''><b>Name</b>: {item?.name}</p>
                            <p className=''><b>Description:</b> {item?.description}</p>
                            <p className=''><b>Date:</b> {item?.date}</p>
                        </div>)
                    )
                        :
                        [1, 2, 3].map(item => <div className='Academic-item item-card' key={item}>loading ...</div>)
                }
            </div>
        </div>
    )
}

export default Academic