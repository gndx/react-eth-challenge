import React from 'react';
import "./Languages.scss";
import getData from '../../utils/getData';

const Languages = () => {


    const [languages, setLanguages] = React.useState([])

    React.useEffect(() => {
        getData("https://raw.githubusercontent.com/LeanderGS/react-eth-challenge/main/data.json").then(res => setLanguages(res.data.languages))
    }, [])

    return (
        <section className='Languages'>
            <h2 className='Languages-title'>Languages</h2>
            <ul>
                { languages.length > 0 ? 
                    
                    languages.map(lan => <li key={lan.name} className='Languages-item'><strong>{lan.name}</strong> {lan.level}</li>) : 
                    
                    <React.Fragment>
                        <li className='Languages-item'></li> 
                        <li className='Languages-item'></li> 
                        <li className='Languages-item'></li> 
                    </React.Fragment>
         
                }
            
            </ul>
        </section>
    );
}

export default Languages;