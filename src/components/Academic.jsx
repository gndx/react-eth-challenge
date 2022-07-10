import { nanoid } from 'nanoid';
import AppCard from './shared/app-card/AppCard';

function Academic({ academic }) {
  return (
    <section className='Academic section'>
      <h3 className='Academic-title'>Academic</h3>

      <article className='Academic-content card-container'>
        {academic.map((item) => (
          <AppCard
            key={nanoid()}
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
