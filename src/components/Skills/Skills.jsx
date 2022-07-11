import React from 'react';
import "./Skills.scss";
import getData from '../../utils/getData';

const Skills = () => {

    const [ skills, setSkills ] = React.useState([]);
    
    React.useEffect(() => {
        getData("http://localhost:3000/data").then(res => setSkills(res.skills))
    }, [])
    
    return (
        <section className='Skills'>
            <h2 className='Skills-title'>Skills</h2>
            <p>Software:</p>
            <ul>
                { skills.length > 0 ? 
                
                    skills.map(skill => <li key={skill} className='Skills-item'>{skill}</li>) :
                    
                
                    <React.Fragment>
                        <li className='Skills-item'></li>
                        <li className='Skills-item'></li>
                        <li className='Skills-item'></li>
                    </React.Fragment>
                
                }
            </ul>
        </section>
    );
}

export default Skills;