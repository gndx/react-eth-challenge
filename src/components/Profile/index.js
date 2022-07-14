import React from "react"
import '../../styles/components/Profile.css'

const Profile = (props) => {
    return (
        <section className='Profile'>
            <h1 className='Profile-title'>Profile</h1>
            <p className='Profile-desc'> {props.data?.Profile}</p>
        </section>
    )
}

export default Profile