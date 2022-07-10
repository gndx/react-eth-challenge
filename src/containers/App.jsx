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
import ErrorReadingBackend from '../components/ErrorReadingBackend';
import WaitAnimation from '../components/WaitAnimation';
import getData from '../utils/getData';

function App() {
    const [allValues, setAllValues] = useState({ error: false, errorObj: '', data: null });
    useEffect(() => {
        (async function () {
            try {
                const result = await getData();
                const { error, errorObj, data } = result;
                if (error === true) {
                    const newAllValues = { data: {}, error: true, errorObj };
                    setAllValues(newAllValues);
                } else {
                    const newAllValues = { data, error: false, errorObj: '' };
                    setAllValues(newAllValues);
                }
            } catch (e) {
                const newAllValues = { data: {}, error: true, errorObj: e };
                console.error('App.jsx - error', e);
                setAllValues(newAllValues);
            }
        })();
    }, []);
    const { error, errorObj, data } = allValues;
    return (
        <>
            {data && error === true && (
                <ErrorReadingBackend error={errorObj} />
            )}
            {data && error === false && (
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
                    <div />
                </>
            )}
            {!data && (
                <WaitAnimation />
            )}
        </>
    );
};

export default App;
