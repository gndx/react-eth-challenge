import { nanoid } from 'nanoid';
import AppBadge from './shared/app-badge/AppBadge';

function Languages({ languages }) {
  return (
    <section className='Languages section'>
      <h3 className='Languages-title'>Languages</h3>

      <ul className='Languages-content percentage-container'>
        {languages.map((language) => (
          <AppBadge
            key={nanoid()}
            className='Languages-item'
            content={language.content}
          />
        ))}
      </ul>
    </section>
  );
}

export default Languages;
