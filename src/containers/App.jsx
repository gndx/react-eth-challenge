import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import Profile from '../components/Profile/Profile';
import Experience from '../components/Experience/Experience';
import Academic from '../components/Academic/Academic';
import Skills from '../components/Skill/Skills';
import Interest from '../components/Interest/Interest';
import Languages from '../components/Language/Languages';
import Loader from '../components/Utils/Loader';
import getData from '../utils/getData';
import Footer from '../components/Footer/Footer';
import Certificate from '../components/Certificate/Certificate';

const App = () => {

  const [data, setData] = useState(null);

  useEffect(() => {

    getData('https://json-server-cellunlockus-gmailcom.vercel.app/api/data', { cors: true })
      .then((data) => setData(data))
      .catch((e) => console.error(e));

  }, []);

  if (!data) {
    return <Loader />;
  }

  return (
    <div className='lg:mx-auto mx-5 mt-5 text-base text-gray-800 dark:text-neutral-200 max-w-5xl font-sans font-normal pb-10'>
      <Header data={data.about} />
      <Profile data={data.about.profile} />
      <Experience data={data.experience} />
      <Certificate data={data.certificate} />
      <div className='flex gap-x-5 w-full'>
        <Academic data={data.academic} />
        <Skills data={data.skills} />
      </div>
      <div className='flex gap-x-5 w-full'>
        <Interest data={data.interest} />
        <Languages data={data.languages} />
      </div>
      <Footer social={data.social} />
    </div>
  );
};

export default App;
