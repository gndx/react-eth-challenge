import { nanoid } from 'nanoid';
import AppCard from './shared/app-card/AppCard';

function Experience({ experience }) {
  return (
    <section className='Experience section'>
      <h3 className='Experience-title'>Experience</h3>

      <article className='Experience-content card-container'>
        {experience.map((exp) => (
          <AppCard
            key={nanoid()}
            title={exp.title}
            description={exp.description}
            className='Experience-item'
          />
        ))}
      </article>
    </section>
  );
}

export default Experience;
