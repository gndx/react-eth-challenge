// import React from 'react';
import React, { useState, useEffect } from 'react';
import '../styles/components/App.css';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import getData from '../utils/getData';

function App() {
    const [data, setData] = useState({});
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
    return (
        <>
            <Header data={data}>
                <Profile data={data} />
            </Header>
            <About data={data} />
            <Experience data={data} />
            <div className='grid-container-2-col'>
                <Academic data={data} />
                <Skills data={data} />
            </div>
            <div className='grid-container-2-col'>
                <Interest data={data} />
                <Languages data={data} />
            </div>
        </>
    );
};

export default App;
