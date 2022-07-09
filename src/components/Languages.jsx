import AppBadge from './shared/app-badge/AppBadge';

function Languages() {
  return (
    <section className='Languages section'>
      <h3 className='Languages-title'>Languages</h3>

      <ul className='Languages-content percentage-container'>
        <AppBadge className='Languages-item' content='Spanish' />
        <AppBadge className='Languages-item' content='English' />
        <AppBadge className='Languages-item' content='Italian' />
      </ul>
    </section>
  );
}

export default Languages;
