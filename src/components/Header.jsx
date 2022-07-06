import React from 'react';

const Header = ({children}) => {
    return (
        <div className='w-full sm:max-w-sm p-8 bg-gradient-to-b from-indigo-300 via-green-300 to-white'>
            <div class="px-2 mb-12">
                <img src="https://christiankozalla.github.io/dev-resume-template/assets/jack-finnigan-rriAI0nhcbc-unsplash.d535630d.jpg" 
                alt="Profile Picture" class="rounded-full w-48 mx-auto mb-2"/>
                <h1 class="Header-title text-center text-3xl font-semibold mb-2">Danny Dev</h1>
                <h2 class="Header-job-title text-center text-xl font-light">Fullstack Developer</h2>
            </div>
            {children}
        </div>
    );
};

export default Header;