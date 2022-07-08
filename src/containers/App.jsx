import React, { useEffect, useState } from 'react';
import '../styles/components/App.styl';
import { Header } from '../components/Header';
import { About } from '../components/About';
import { Profile } from '../components/Profile';
import { Experience } from '../components/Experience';
import { Academic } from '../components/Academic';
import { Skills } from '../components/Skills';
import { Interest } from '../components/Interest';
import { Languages } from '../components/Languages';
import { getData } from '../utils/getData';

const URL = 'https://fake-server10.herokuapp.com/data';

const App = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    getData(URL).then((res) => {
      setUser(res);
    });
  }, []);

  return (
    <>
      {user && (
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
        </>
      )}
    </>
  );
};

export default App;
