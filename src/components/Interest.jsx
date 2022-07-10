import AppBadge from './shared/AppBadge';

function Interest({
  interest = Array.from({ length: 3 }, (v, k) => [{ content: k }]),
}) {
  return (
    <section className='Interest section'>
      <h3 className='Interest-title'>Interest</h3>

      <ul className='Interest-content badge-container'>
        {interest.map((item) => (
          <AppBadge
            key={`Interest-${Math.random() * 100}`}
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
