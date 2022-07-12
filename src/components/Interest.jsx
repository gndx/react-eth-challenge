import React, { useContext } from 'react';
import { ProfileContext } from '../containers/App';

const Interest = () => {
    const data = useContext(ProfileContext);
    const { interest = ["", "", ""] } = data;
    return (
        <>
            <h3 className='Interest-title'>Interest</h3>
            <ul className="Interest-content">
                {interest.map((value, index) => (
                    <li className="Interest-item" key={index}>{value}</li>
                ))}
            </ul>
        </>
    )
};

export default Interest;
