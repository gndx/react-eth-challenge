import React from 'react';
import "./Profile.scss";
import { AppContext } from "../AppContext";

const Profile = () => {

    const { data } = React.useContext(AppContext);
    
    const { Profile } = data;

    return (
        <section className="Profile">
            <h2 className='Profile-title'>Profile</h2>
            <p className="Profile-desc">{Profile}</p>
        </section>
    )
}

export default Profile;