import React from 'react'

const About = ({ data = {} }) => {
  return (
    <div className='About-container container'>
      <div className='row'>
        <h2 className='About-title title'>About me</h2>
        <p className="About-description">Hello, my name is Joel. I am a martial artist, educator, dancer and passionate about science, technology and education. I deeply believe in never stopping learning and growing, finding new ways to meet new challenges. You can find me at: </p>
        {data.social.map((social) => (
          <div className='About-item col-12 col-md-6 col-lg-4' key={social.name}>
            <h5 className='subtitle'>{social.name}</h5>
            <a href={social.url} target='_blank'>{social.url}</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About
