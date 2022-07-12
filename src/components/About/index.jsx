import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';

const About = () => {

  const data = useContext(AppContext)
  return (
    <React.Fragment>
      <h1 className='About-title'>Contact me</h1>
      <div className='About-container'>
      <p className='About-item'>{ data.phone }</p>
      <p className='About-item'>{ data.email }</p>
      <p className='About-item'>{ data.website }</p>
    </div>
    </React.Fragment>
  )
}

export default About