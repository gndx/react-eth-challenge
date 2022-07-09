import AppBadge from './shared/app-badge/AppBadge';

function Interest() {
  return (
    <section className='Interest section'>
      <h3 className='Interest-title'>Interest</h3>

      <ul className='Interest-content badge-container'>
        <AppBadge
          className='Interest-item'
          badgeType='secondary'
          content='HTML'
        />
        <AppBadge
          className='Interest-item'
          badgeType='secondary'
          content='Udemy'
        />
        <AppBadge
          className='Interest-item'
          badgeType='secondary'
          content='Udemy'
        />
      </ul>
    </section>
  );
}

export default Interest;
