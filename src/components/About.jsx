import React, { useContext } from 'react'
import AppContext from '../context/context'


const About = () => {

  const {
    profession,
    phone,
    email,
    website,
    address,
    social
  } = useContext(AppContext)

  return (
    <div className='information-container'>
      <h4 className="Header-job-title">{ profession }</h4>
      <p className="Header-address">{ address }</p>
      <div className="Contact-information">
        {/* <p className="Header-email">{ email }</p> */}
        {/* <p className="Header-phone">{ phone }</p> */}
        {/* <p className="Header-website">{ website }</p> */}
      </div>

      <h1 className="About-title"></h1>
      <div className="Social-icons">
        {
          social?.map(({
            icon,
            name,
            url
          }, index) => (
            <div className="About-item" key={name+index}>
              <a href={url} target='blank'>
                <i className={`bx ${icon}`}></i>
              </a>
            </div>
          ))
        }
        <div className="About-item" key={'gmail-mail'}>
          <a href={`mailto:${email}`} target='blank'>
            <i className={`bx bxl-gmail`}></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default About