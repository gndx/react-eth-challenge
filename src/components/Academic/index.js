import React from 'react';
import './styles.styl';
import PropTypes from 'prop-types';
/**
 * This is a Custom container that maps Academic and certificate elements props to Academic and certificate items
 */
export function Academic({ Academic: academic = [{}, {}, {}], certificate = [{}, {}, {}] }) {

  const renderList = (animation) => (
    <div className={`two-cols ${animation ? 'slow-animation' : ''}`}>
      <div className='Academic-title'>
        <h2>Education 🏅</h2>
      </div>
      <h3>Academic Formation</h3>
      <ul>
        {
          academic.map((element, id) => (
            <li key={id} className='Academic-item'>
              <div>{element.degree}</div>
              <div>{element.description}</div>
            </li>
          ))
        }
      </ul>
      <h3>Certificates</h3>
      <ul>
        {
          certificate.map((element, id) => (
            <li key={id} className='Academic-item'>
              <div>{element.name}</div>
              <div>{element.institution}</div>
              <div>{element.description}</div>
              <div>{element.date}</div>
            </li>
          ))
        }
      </ul>
    </div>
  );

  return (
    <>
      { renderList(true)}
    </>
  );
}

Academic.propTypes = {
  /** ```json
  "Academic": [
      {
        "degree": "Bachelor's degree",
        "description": "Electrical and Electronics Engineering",
        "endDate": "July 2017",
        "institution": "UPB",
        "startDate": "Jan 2010"
      }],
  "certificate": [
      {
        "date": "Jan 2022",
        "description": "Python Developer",
        "institution": "Platzi",
        "name": "FrontEnd Developer"
      }]
``` */
  Academic: PropTypes.array,

};
