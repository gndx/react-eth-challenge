import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Languages from '../components/Languages';
import Interest from '../components/Interest';
import { Context } from '../components/Context';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Nav from '../components/Nav';

export default function AppUI() {
  const { data, loading, error } = React.useContext(Context);

  return (
    <>
      {error && <p>error</p>}
      {data && !loading && (
        <>
          <Header>
            <Nav />
          </Header>
          <main>
            <About>
              <Contact/>
            </About>
            <section className='skills-and-academic'>
              <div className='container'>
                <Skills />
                <Academic />
              </div>
            </section>
            <Experience />
            <section className='languages-and-interest'>
              <div className='container'>
                <Languages />
                <Interest />
              </div>
            </section>
          </main>
        </>
      )}
    </>
  );
}
