import AppCard from './shared/AppCard';

function Academic({
  academic = Array.from({ length: 3 }, (v, k) => [
    { title: k, description: k },
  ]),
}) {
  return (
    <section className='Academic section'>
      <h3 className='Academic-title'>Academic</h3>

      <article className='Academic-content card-container'>
        {academic.map((item) => (
          <AppCard
            key={`Academic-${Math.random() * 100}`}
            title={item.title}
            description={item.description}
            cardType='secondary'
            className='Academic-item'
          />
        ))}
      </article>
    </section>
  );
}

export default Academic;
