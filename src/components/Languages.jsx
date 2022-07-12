import React, { useContext } from 'react';
import { ProfileContext } from '../containers/App';

const Languages = () => {
    const data = useContext(ProfileContext);
    const { languages = [{}, {}, {}] } = data;
    return (
        <>
            <h3 className='Languages-title'>Languages</h3>
            <div className="Languages-content">
                {languages.map((exp, index) => (
                    <div className="Languages-item" key={index}>
                        <div className="Languages-item-title">
                            <h4>{exp.name}</h4>
                            <h5>{exp.percentage}</h5>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
};

export default Languages;
