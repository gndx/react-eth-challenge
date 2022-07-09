import React from 'react';
import '../styles/components/App.css';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';

function App() {
    return (
        <>
            <Header>
                <Profile />
            </Header>
            <About />
            <Experience />
            <div className='grid-container-2-col'>
                <Academic />
                <Skills />
            </div>
            <div className='grid-container-2-col'>
                <Interest />
                <Languages />
            </div>
        </>
    );
};

export default App;
