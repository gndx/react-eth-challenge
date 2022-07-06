import React, { useContext } from 'react';
import { AppContext } from '../AppContext';

const Header = ({children}) => {
    const {data}=useContext(AppContext)
    return (
        <div className='w-full sm:max-w-sm p-8 bg-gradient-to-b from-blue-300 via-indigo-300-300 to-white'>
            <div className="px-2 mb-12">
                <img src={data.avatar} alt="Profile Picture" className="rounded-full w-48 mx-auto mb-2"/>
                <h1 className="Header-title text-center text-3xl font-semibold mb-2">{data.name}</h1>
                <h2 className="Header-job-title text-center text-xl font-light">{data.profession}</h2>
            </div>
            {children}
        </div>
    );
};

export default Header;