import React from 'react';
import "./Academic.scss";
import AcademicItem from "./AcademicItem/AcademicItem";
import { AppContext } from "../AppContext";

const Academic = () => {

    const { data } = React.useContext(App);
    const { academic } = data;

    return (
        <section className='Academic'>
            <h2 className="Academic-title">Academic information</h2>
            <ol>
                { academic ? academic.map(aca => 
                    <AcademicItem 
                        key={aca.institution}
                        className="Academic-item"
                        career={aca.degree}
                        institution={aca.institution}
                        institutionUrl={aca.institutionUrl}
                        type={aca.type}
                        date={aca.date}
                    />) : "" }
                
                <AcademicItem 
                    className="Academic-item"
                    career="Bachelor’s degree in systems engineering, information technology and telematics."
                    institution="Tech technological university"
                    institutionUrl="https://www.techtitute.com/"
                    date="December 2021 - December 2025"
                    type="Remote"
                />
                <AcademicItem 
                    className="Academic-item"
                    career="Blockchain and cryptocurrency, JavaScript and English schools."
                    institution="Platzi"
                    institutionUrl="https://platzi.com"
                    date="October 2021 - Undefined"
                    type="Remote"
                />
                <AcademicItem 
                    className="Academic-item"
                    career="IBM Courses full stack cloud developer."
                    institution="EDx"
                    institutionUrl="https://www.edx.org/"
                    date="July 2022 - Undefined"
                    type="Remote"
                />
            </ol>
        </section>
    );
}

export default Academic;