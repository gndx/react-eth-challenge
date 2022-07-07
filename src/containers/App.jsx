import React from 'react';
import '../styles/components/App.styl';
import { Header } from '../components/Header';
import { About } from '../components/About';
import { Profile } from '../components/Profile';
import { Experience } from '../components/Experience';
import { user } from '../data/user-info';
import { Academic } from '../components/Academic';
import { Skills } from '../components/Skills';
import { Interest } from '../components/Interest';
import { Languages } from '../components/Languages';

const App = () => {
  return (
    <>
      <Header {...user}>
        <About descriptionList={user.descriptionList} />
      </Header>
      <Profile description={user.description} />
      <Experience experience={user.experience} />
      <div className="mixSection">
        <Academic academic={user.academic} />
        <Skills skills={user.skills} />
      </div>
      <div className="mixSection">
        <Interest interest={user.interest} />
        <Languages languages={user.languages} />
      </div>
      {/*
       */}
    </>
  );
};

export default App;
