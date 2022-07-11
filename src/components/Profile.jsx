import React from 'react'
import Container from '../styles/components/Container';

const Profile = ({ description }) => {
    return (
        <Container>
            <h3 className='h2 title Profile-title'>Profile</h3>
            <p className='Profile-desc'>{description}</p>
        </Container>
    )
}

export default Profile