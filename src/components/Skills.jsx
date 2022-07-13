import React from 'react'
import { useAppContext} from '../context/AppContext';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

const Skills = () => {
  const { skills } = useAppContext();
  return (
    <div className='container width_50'>
        <h1 className="Skills-title">Skills</h1>
        <ul className='margin_top_10'>
        { skills.map( ({name, percentage }) => (
          <li key={name} className='Skills-item inline_container' >
            <span>{name}</span>            
            <Progress percent={percentage.slice(0, -1)} status="active"></Progress>
          </li>
        )) 
        }
        </ul>
    </div>
  )
}

export default Skills
