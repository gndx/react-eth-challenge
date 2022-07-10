function About({ profession, email, website, address }) {
  return (
    <section className='About'>
      <h3 className='About-title'>{profession}</h3>

      <p className='About-content'>
        <a
          className='link About-item About-email'
          href={`mailto:${email}`}
          rel='noopener noreferrer'
          target='_blank'
        >
          {email}
        </a>
        <a
          className='link About-item About-website'
          href={website}
          rel='noopener noreferrer'
          target='_blank'
        >
          website
        </a>
        <span className='About-item About-address'>{address}</span>
      </p>
    </section>
  );
}

export default About;
