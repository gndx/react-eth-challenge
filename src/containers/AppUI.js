import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Languages from '../components/Languages';
// import Profile from '../components/Profile';
import Interest from '../components/Interest';
import { Context } from '../components/Context';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

export default function AppUI() {
  const { data, loading, error } = React.useContext(Context);
  if (!loading) console.log(data);

  return (
    <>
      {error && <p>error</p>}
      {data && !loading && (
        <>
          <Header/>
          <main>
            <About>
              <Contact/>
            </About>
            <Skills />
            <Experience />
            <section className='languages-and-interest'>
              <div className='container'>
                <Languages />
                <Interest />
              </div>
            </section>
            <Academic />
          </main>
        </>
      )}
    </>
  );
}
