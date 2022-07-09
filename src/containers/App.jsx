import React, {useEffect, useState, useRef} from 'react';
import '../styles/components/App.styl';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';

import { useStateValue } from '../StateProvider';

const App = () => {
  const [{object}, dispatch] = useStateValue();
  const [user, setUser] = useState();

  useEffect(async () => {
    object.then((r) => {
      setUser(r.data)
    })
  }, [])

    return (
       <>
        {user && (
            <>
                <Header object={user}>
                  <About social={user.social} />
                </Header>     
                <Profile profile={user.Profile} />
                <Experience experience={user.experience} />
                <div className='grupo'>
                  <Academic academic={user.Academic} />
                  <Skills skills={user.skills} />
                </div>
                <div className='grupo'>
                  <Interest interest={user.interest} />
                  <Languages languages={user.languages} />
                </div>
              </>
        )}
       </>     
    )    
};

export default App;
