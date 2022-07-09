import React, {useState,useEffect} from 'react';
import '../styles/components/App.styl';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience.jsx';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import getData from '../utils/getData'; 
import API from '../utils/config';

const App = () => {
  const [data, setData]= useState([]); 
  const [isLoading, Loading] = useState(false);

  const getCVInfo = async () => {
      getData(API)
        .then(data => setData(data))
        .then(res => Loading(true))
        .catch(err => {throw new Error(err);})   
  } 

  useEffect(()=>{
    getCVInfo()
  },[])

  return !isLoading ? (<p>Cargando...</p>) : 
  (       
    <div className="container">         
      <div className="columns is-multiline">
        <div className="column is-full">
          <Header Name={data.name} Phone={data.phone} Address={data.address} Email={data.email} WebSite={data.website} Profession={data.profession} Avatar={data.avatar}>
            <About social={data.social}/>
          </Header>  
        </div>    
        <div className="column is-full">
          <Profile profile={data.Profile}/>
        </div>
        <div className="column is-full">
          <Experience exp={data.experience}/>    
        </div>  
        <div className="column is-full is-half-desktop">
          <Academic academic={data.Academic}/>
        </div>        
        <div className="column is-full is-half-desktop">
          <Interest interest={data.interest}/>
        </div>
        <div className="column is-full">
          <div className="hero is-white">
            <div className="hero-body">
              <div className="columns is-multiline">
                <div className="column is-full is-half-desktop">
                  <Skills skills={data.skills}/>
                </div>
                <div className="column is-full is-half-desktop">
                  <Languages languages={data.languages}/>
                </div>
              </div>
            </div>
          </div>          
        </div>
      </div>
    </div>
  )
};

export default App;
