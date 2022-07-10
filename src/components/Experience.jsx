import AppCard from './shared/AppCard';

function Experience({
  experience = Array.from({ length: 3 }, (v, k) => [
    { title: k, description: k },
  ]),
}) {
  return (
    <section className='Experience section'>
      <h3 className='Experience-title'>Experience</h3>

      <article className='Experience-content card-container'>
        {experience.map((exp) => (
          <AppCard
            key={`Experience-${Math.random() * 100}`}
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
