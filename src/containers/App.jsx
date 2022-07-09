import React, { useState, useEffect } from 'react';
import '../styles/components/App.styl';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languajes';
import Error from '../components/Error';
import Loading from '../components/Loading';
import getData from '../utils/getData';

function App() {
  const [user, setUser] = useState(undefined);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const API = process.env.SERVER || 'https://raw.githubusercontent.com/juansecod/react-eth-challenge/main/data.json';

  useEffect(() => {
    const data = getData(API);
    data
      .then((data) => {
        const { data: info } = data;
        (!info) ? setUser(data) : setUser(info);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) return (<Loading />);
  if (!loading && error) return (<Error />);
  if (!loading && !user) return (<Error code='404' message='Not Found' />);

  const {
    name,
    profession,
    address,
    email,
    website,
    phone,
    avatar,
    Profile: profile,
    certificate,
    Academic: academic,
    experience,
    skills,
    interest,
    languages,
    social,
  } = user;

  return (
    <div className='App'>
      <Header name={name} avatar={avatar} social={social}>
        <About
          profession={profession}
          address={address}
          email={email}
          website={website}
          phone={phone}
        />
      </Header>
      <Profile profile={profile} />
      <Experience experience={experience} />
      <Academic academic={academic} certificate={certificate} />
      <Skills skills={skills} />
      <Interest interest={interest} />
      <Languages languages={languages} />
    </div>
  );
}

export default App;
