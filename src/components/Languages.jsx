import AppBadge from './shared/AppBadge';

function Languages({
  languages = Array.from({ length: 3 }, (v, k) => [{ content: k }]),
}) {
  return (
    <section className='Languages section'>
      <h3 className='Languages-title'>Languages</h3>

      <ul className='Languages-content percentage-container'>
        {languages.map((language) => (
          <AppBadge
            key={`Languages-${Math.random() * 100}`}
            className='Languages-item'
            content={language.content}
          />
        ))}
      </ul>
    </section>
  );
}

export default Languages;
