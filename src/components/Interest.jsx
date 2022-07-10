import { nanoid } from 'nanoid';
import AppBadge from './shared/app-badge/AppBadge';

function Interest({ interest }) {
  return (
    <section className='Interest section'>
      <h3 className='Interest-title'>Interest</h3>

      <ul className='Interest-content badge-container'>
        {interest.map((item) => (
          <AppBadge
            key={nanoid()}
            className='Interest-item'
            badgeType='secondary'
            content={item.content}
          />
        ))}
      </ul>
    </section>
  );
}

export default Interest;
