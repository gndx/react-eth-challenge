import React, { useContext } from 'react';
import { ProfileContext } from '../containers/App';
import '../styles/components/Academic.styl';

const Academic = () => {
    const data = useContext(ProfileContext);
    const { Academic = [{}, {}, {}], certificate = [{}] } = data;
    return (
        <>
            <section className="Academic">
                <h3 className='Academic-title'>Academic</h3>
                <div className="Academic-content">
                    {Academic.map((exp, index) => (
                        <div className="Academic-item" key={index}>
                            <div className="Academic-item-title">
                                <h4>{exp.degree}</h4>
                                <h5>{exp.startDate} - {exp.endDate}</h5>
                                <h5>{exp.institution}</h5>
                                <p>{exp.description}</p>
                                <hr />
                            </div>
                        </div>
                    ))}
                </div>
                <h3 className='Certificate-title'>Certificate</h3>
                <div className="Certificate-content">
                    {certificate.map((exp, index) => (
                        <div className="Certificate-item" key={index}>
                            <div className="Certificate-item-title">
                                <h4>{exp.name}</h4>
                                <div>
                                    <h5 className="left">{exp.institution}</h5>
                                    <h5 className="right">{exp.date}</h5>
                                </div>
                                <p>{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
};

export default Academic;
