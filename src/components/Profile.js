import React, { useContext } from 'react';
import { Context } from '../containers/App';

const Profile = () => {
    const data = useContext(Context);
    return (
        <section>
            <h3 className="Profile-title">
                My profile
            </h3>
            <p className="Profile-desc">
                {data.Profile}
            </p>
        </section>
    )
}

export default Profile;