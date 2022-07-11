import React from 'react';
import "./Profile.scss";
import { AppContext } from "../AppContext";

const Profile = () => {

    const { data } = React.useContext(AppContext);

    return (
        <section className="Profile">
            <h2 className='Profile-title'>Profile</h2>
            <p className="Profile-desc">{data ? data.profile : ""}</p>
        </section>
    )
}

export default Profile;