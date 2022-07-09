function About() {
  return (
    <section className='About'>
      <h3 className='About-title'> Front end Engineer </h3>

      <p className='About-content'>
        <a
          className='link About-item About-email'
          href='mailto: g.ram.bt@hotmail.com'
          rel='noopener noreferrer'
          target='_blank'
        >
          g.ram.bt@hotmail.com
        </a>
        <a
          className='link About-item About-website'
          href='https://github.com/gusram01'
          rel='noopener noreferrer'
          target='_blank'
        >
          github
        </a>
        <span className='About-item About-address'>Ciudad de México</span>
      </p>
    </section>
  );
}

export default About;
