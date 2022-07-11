import React, {useContext} from 'react';
import '../styles/components/About.styl';
import { InfoContext } from '../containers/App';
const About = (props) => {
    const data = useContext(InfoContext);
    const {profession,phone,email,website,address } = data;
    return (
      <>
        <h3 className='About-title'>{profession}</h3>
        <ul>
            <li className='About-item'><a href={`tel:${phone}`} target='_blank' rel='noopener noreferrer'>{phone}</a></li>
            <li className='About-item'><a href={`mailto:${email}`} target='_blank' rel='noopener noreferrer'>{email}</a></li>
            <li className='About-item'><a href={website} target='_blank' rel='noopener noreferrer'>{website}</a></li>
        </ul>
        <p>{address}</p>
      </>
    )
  };    

  export default About;