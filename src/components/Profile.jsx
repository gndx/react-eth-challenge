import React, { useContext } from 'react';
import { ProfileContext } from '../containers/App';
import '../styles/components/Profile.styl';

const Profile = () => {
    const data = useContext(ProfileContext);
    const { Profile, profession } = data;
    return (
        <>
            <section className="Profile">
                <h3 className='Profile-title'>{profession}</h3>
                <h4 className='Profile-desc'>{Profile}</h4>
            </section>
        </>
    )
};

export default Profile;
