import React from 'react';

export const Profile = ({profile = []}) => (
    <seccion class="Profile">
        <p className='Profile-title'>Profile</p>
        <p className='Profile-desc'>{profile}</p>
    </seccion>
)

export default  Profile;