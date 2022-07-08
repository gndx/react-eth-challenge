import React, { useState, useEffect } from 'react';
import getData from '../utils/getData';
 
const Header = ( { children } ) => {
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
    
    const {name, profession, address, email, website, phone, avatar} = data;

// console.log('>>--> Header Data:');
// console.log(data);

    return (
        <div>
            <div className="Header-image"><img src={avatar}></img></div>
            <div className="Header-title">{name}</div>
            <div className="Header-job-title">{profession}</div>
            <div className="Header-phone">{phone}</div>
            <div className="Header-email">{email}</div>
            <div className="Header-website">{website}</div>
            <div className="Header-address">{address}</div>
            {children}
        </div>
    );
};
 
export default Header;