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
import Loader from '../components/Loader';

const App = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    getData('https://boiling-reef-07418.herokuapp.com/')
      .then((data) => {
        setData(data.data);
      })
      .then(() => setLoad(false));
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {load ? (
        <Loader />
      ) : (
        <>
          <Header avatar={data.avatar} name={data.name}>
            <About
              profession={data.profession}
              phone={data.phone}
              email={data.email}
              address={data.address}
              website={data.website}
            />
          </Header>
          <Profile profile={data.Profile} />
          <Experience experience={data.experience} />
          <div className="grid-container">
            <Academic academic={data.Academic} />
            <Skills skills={data.skills} />
            <Interest interest={data.interest} />
            <Languages languages={data.languages} />
          </div>
        </>
      )}
    </>
  );
};

export default App;
