import React, {useContext} from 'react';
import { InfoContext } from '../containers/App';
import '../styles/components/Profile.styl';


const Profile = (props) => {
    const data = useContext(InfoContext);
        const {Profile} = data;
    return(
        <section>
        <h2 className='Profile-title'>About Me</h2>
        <p className='Profile-desc'>{Profile}</p>
        </section>
    )
};

export default Profile;