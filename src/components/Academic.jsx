import AppCard from './shared/app-card/AppCard';

function Academic() {
  return (
    <section className='Academic section'>
      <h3 className='Academic-title'>Academic</h3>

      <article className='Academic-content card-container'>
        <AppCard
          title='Platzi'
          description="I'm studying at Platzi because I want to become a
          software dev."
          cardType='secondary'
          className='Academic-item'
        />
        <AppCard
          title='Udemy'
          cardType='secondary'
          description='Javascript dev'
          className='Academic-item'
        />
        <AppCard
          title='Udemy'
          cardType='secondary'
          description='Typescript dev'
          className='Academic-item'
        />
      </article>
    </section>
  );
}

export default Academic;
