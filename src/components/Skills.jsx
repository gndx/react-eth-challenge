import AppBadge from './shared/app-badge/AppBadge';

function Skills() {
  return (
    <section className='Skills section'>
      <h3 className='Skills-title'>Skills</h3>

      <ul className='Skills-content badge-container'>
        <AppBadge className='Skills-item' badgeType='primary' content='HTML' />
        <AppBadge className='Skills-item' badgeType='primary' content='Udemy' />
        <AppBadge className='Skills-item' badgeType='primary' content='Udemy' />
      </ul>
    </section>
  );
}

export default Skills;
