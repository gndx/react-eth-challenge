import React, { useState, useEffect } from 'react';
import getData from '../utils/getData';
 
const Profile = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        (async function() {
            try {
                let result = await getData();
                setData(result.data);
            } catch(e) {
                console.error(e);
            }
        })();
    }, []);


    const {profession, Profile} = data;

    return (
        <div>
            <div className="Profile-title">Perfil</div>
            <div className="Profile-desc">{Profile}</div>
        </div>
    );
};
 
export default Profile;