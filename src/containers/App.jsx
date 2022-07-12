import React, { createContext, useState, useEffect } from 'react';
import '../styles/components/App.styl';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import getData from '../utils/getData';

export const ProfileContext = createContext({});

const URL = 'https://raw.githubusercontent.com/azratul/react-eth-challenge/main/data.json';

const App = () => {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        getData(URL)
            .then(res => {
                setData(res.data)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return (
            <>
                <div>Loading...</div>
            </>
        );
    }

    return (
        <>
            <ProfileContext.Provider value={data}>
                <Header>
                    <About />
                </Header>
                <Profile />
                <Experience />
                <section className="Group">
                    <Academic />
                    <Skills />
                    <Interest />
                    <Languages />
                </section>
            </ProfileContext.Provider>
        </>
    )

};

export default App;
