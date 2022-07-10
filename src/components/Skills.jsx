import { nanoid } from 'nanoid';
import AppBadge from './shared/app-badge/AppBadge';

function Skills({ skills }) {
  return (
    <section className='Skills section'>
      <h3 className='Skills-title'>Skills</h3>

      <ul className='Skills-content badge-container'>
        {skills.map((skill) => (
          <AppBadge
            key={nanoid()}
            className='Skills-item'
            badgeType='primary'
            content={skill.content}
          />
        ))}
      </ul>
    </section>
  );
}

export default Skills;
