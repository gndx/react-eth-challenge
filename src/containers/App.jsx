import React from "react";
import "../styles/App.scss";
import Header from "../components/Header";
import About from "../components/About";
import Profile from "../components/Profile";
import Experience from "../components/Experience";
import Academic from "../components/Academic";
import Skills from "../components/Skills";
import Interest from "../components/Interest";
import Languages from "../components/Languages";
import data from "../../data.json";

const App = () => {
  const cvInfo = data.data;
  return (
    <>
      <Header data={cvInfo}>
        <About data={cvInfo} />
      </Header>
      <Profile data={cvInfo} />
      <Experience data={cvInfo.experience} />
      <div className="cv-facts">
        <Academic data={cvInfo.Academic} />
        <Skills data={cvInfo.skills} />
        <Interest data={cvInfo.interest} />
        <Languages data={cvInfo.languages} />
      </div>
    </>
  );
};

export default App;
