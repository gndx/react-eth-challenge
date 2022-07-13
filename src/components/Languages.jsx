import React from 'react'
import { useAppContext} from '../context/AppContext';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

const Languages = () => {
  const { languages } = useAppContext();
  return (
    <div className='container width_50'>
        <h1 className="Languages-title">Languages</h1>
        <ul className='margin_top_10'>
        { languages.map( ({name, percentage }) => (
          <li key={name} className='Languages-item inline_container' >
            <span>{name}</span>            
            <Progress percent={percentage.slice(0, -1)} status="active"></Progress>
          </li>
        )) 
        }
        </ul>
    </div>
  )
}
export default Languages