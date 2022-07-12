import React, { useContext } from 'react';
import { ProfileContext } from '../containers/App';

const Profile = () => {
    const data = useContext(ProfileContext);
    const { avatar, Profile, profession, name } = data;
    return (
        <>
            <img width="200" src={avatar} height="200" alt={name} />
            <h3 className='Profile-title'>{profession}</h3>
            <h4 className='Profile-desc'>{Profile}</h4>
        </>
    )
};

export default Profile;
