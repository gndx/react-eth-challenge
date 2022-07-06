import React, { useContext } from 'react';
import {AppContext} from '../AppContext'
import SkillItem from './SkillItem'

const Skills = () => {
  const {data: {skills}}=useContext(AppContext)
    return (
        <div className="font-light text-lg px-2 mb-12">
        <h2 className="text-xl font-semibold mb-4 Skills-title">Skills & Tools</h2>
        <ul className="list-none">
          {
            skills?.map((skill, index)=>
            <li className='Skills-item' key={index}> 
              <SkillItem skill={skill}/>
            </li>)
          }
        </ul>
      </div>
    );
};

export default Skills;