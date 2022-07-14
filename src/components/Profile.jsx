import React, { useContext } from 'react'
import { DataContext } from '../containers/App'

const Profile = () => {

    const data = useContext(DataContext)

    return (
        <div className="card-container">
            <h1 className='Profile-title'>Profile</h1>
            <p className='Profile-desc'>{data?.profile}</p>
        </div>
    )
}

export default Profile