import AppBadge from './shared/AppBadge';

function Skills({
  skills = Array.from({ length: 3 }, (v, k) => [{ content: k }]),
}) {
  return (
    <section className='Skills section'>
      <h3 className='Skills-title'>Skills</h3>

      <ul className='Skills-content badge-container'>
        {skills.map((skill) => (
          <AppBadge
            key={`Skills-${Math.random() * 100}`}
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
