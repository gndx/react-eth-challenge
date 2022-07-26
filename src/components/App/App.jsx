// Libraries
import React from 'react';

// Styles
import '../../styles/components/App.styl';

// Middleware
import getData from '../../middleware/getData.js';

// Components
import Header from '../../components/Header';
import About from '../../components/About';
import Profile from '../../components/Profile';
import Experience from '../../components/Experience';
import Academic from '../../components/Academic';
import Skills from '../../components/Skills';
import SocialNetwork from '../SocialNetwork';
import Languages from '../../components/Languages';

const App = () => {
  const url = 'http://localhost:3000/data';
  const [data, setData] = React.useState({});

  const featchData = async () => {
    let data = await getData(url);
    setData(data);
  };

  React.useEffect(() => {
    featchData();
  }, []);

  return (
    <React.Fragment>
      <div className="MainContainer">
        <Header data={data}>
          <About data={data} />
        </Header>
        <Profile data={data} />
        <Experience experience={data.experience} />
        <div className="sectionContainer">
          <Academic academic={data.Academic} />
          <Skills skills={data.skills} />
        </div>
        <div className="sectionContainer">
          <SocialNetwork social={data.social} />
          <Languages languages={data.languages} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
