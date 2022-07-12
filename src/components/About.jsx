import React from 'react'
import { useAppContext } from '../context/AppContext';

const About = () => {
  const { social } = useAppContext();
  console.log(social)
  return (
  <>
    <span className='About-title'>Social Media</span>
    {
      social?.map((i, key) => ( 
        <div key={key} className='About-item'>
          <span className='description'><a href={i.url} target="_blank">📲 {i.name}</a></span>
        </div>                
    ))}
</>
)}
export default About;
