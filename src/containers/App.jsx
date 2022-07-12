import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import getData from '../utils/getData';
import '../styles/globals.css';

const URL =
  'https://raw.githubusercontent.com/miltondl96/react-eth-challenge/main/data.json';

export default function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData(URL)
      .then((res) => {
        setData(res.data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="bg-gray-800 min-h-screen py-5 lg:py-10 px-4">
      {isLoading ? (
        <div className="text-center">
          <div className="spinner-border text-primary" />
        </div>
      ) : (
        <div className="container mx-auto text-white fade-in-image">
          <Header data={data}>
            <About data={data} />
          </Header>
          <Profile data={data} />
          <div className="lg:flex lg:space-x-5">
            <Experience data={data} />
            <Academic data={data} />
          </div>
          <div className="lg:flex lg:space-x-5">
            <Skills data={data} />
            <Interest data={data} />
            <Languages data={data} />
          </div>
        </div>
      )}
    </div>
  );
}
