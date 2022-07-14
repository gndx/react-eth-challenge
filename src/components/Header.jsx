import React, { useContext } from 'react'
import { DataContext } from '../containers/App'

const Header = ({children}) => {

    const data = useContext(DataContext)

    return (
        <div className="card-container header-container">
            <div className="Header-img-container">
                <img src={data?.avatar} alt="img" className='Header-img'/>
            </div>
            <div className="Header-data">
                <span className='Header-title'>{data?.name}</span>
                <span className='Header-job-title'>{data?.profession}</span>
                {children}
            </div>
        </div>
    )
}

export default Header