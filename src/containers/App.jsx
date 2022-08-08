import React from 'react';
import '../styles/components/App.css';
import styled from 'styled-components';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import getData from '../utils/getData';

const GridLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  //grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  text-align: justify;
  font-size: 2.1rem;
  width: 800px;
`;
function App() {
  //url alterna https://mocki.io/v1/d62540b3-481e-4b52-82c4-5785036005a9
  const [data, setData] = React.useState();
  const url = 'http://localhost:3000/data';
  const consumingAPI = async () => {
    const res = await getData(url);
    setData(res);
  };

  React.useEffect(() => {
    consumingAPI();
  }, []);

  return (
    <GridLayout>
      <Header props={data}>
        {/* <About props={data} /> */}
      </Header>
      <Profile props={data} />
      <Experience props={data} />
      <Academic props={data} />
      <Skills props={data} />
      <Interest props={data} />
    </GridLayout>
  );
}

export default App;
