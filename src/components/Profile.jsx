import React, { useState, useEffect } from 'react';
import getData from '../utils/getData';

function Profile() {
    const [data, setData] = useState({ });

    useEffect(() => {
        (async function () {
            try {
                const result = await getData();
                setData(result.data);
            } catch (e) {
                console.error(e);
            }
        })();
    }, []);

    const { Profile } = data;

    return (
        <div className='Profile-box'>
            <div className='Profile-title'>Perfil</div>
            <div className='Profile-desc'>{Profile}</div>
        </div>
    );
};

export default Profile;
