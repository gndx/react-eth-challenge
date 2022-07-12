import React, {useEffect, useState} from "react";
import '../styles/components/App.styl';
import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";
import Interest from "../components/Interest";
import Languages from "../components/Languages";
import getdata from '../utils/getData'


const App = () => {
  const [user, setUser] = useState(null);
    useEffect(() => {
      getuseData ();
    }, []);

  const getUserData = async () => {
    const data = await getData(
      process.env.USER_DATA || 'http://localhost:3000/data');
    setUser(data);
  };
  if (!user) return null;

  const {
    Academic: academic,
    address,
    avatar,
    email,
    experience,
    interest,
    languages,
    name,
    phone,
    profession,
    Profile: profile,
    skills,
    website,
  } = user;

  return (
    <div ClassName='App'>
      <div ClassName='App-container'>
        <Header avatar={avatar} name={name}>
          <About
            address={address}
            email={email}
            phone={phone}
            profession = {profession}
            website = {website}
           />
        </Header>
        <Profile profile={profile}/>
        <Experience experience={experience}/>
        <div ClassName='App-grid'>
          <Academic academic={academic}/>
          <Skills skills={skills}/>
        </div>
        <div ClassName='App-grid'>
          <Interest interest={interest}/>
          <Languages languages={languages}/>
        </div>
      </div>
      <div ClassName='App-round App-top-left'/>
      <div ClassName='App-round App-bottom-right'/>
    </div>
  );
};

export default App;
